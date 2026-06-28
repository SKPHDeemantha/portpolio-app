import jsPDF from "jspdf";
import { resumeData } from "../data/resumeData";

// ─────────────────────────────────────────────────────────────────────────────
// ResumeGenerator — pure-jsPDF, no html2canvas.
// Expected PDF size: ~200–500 KB (vs ~37 MB from html2canvas/PNG approach).
// ─────────────────────────────────────────────────────────────────────────────
class ResumeGenerator {
  constructor() {
    this.doc = null;

    // ── Layout (all in mm, A4 = 210 × 297) ──────────────────────────────────
    this.SB_W     = 65;          // sidebar width
    this.SB_PAD   = 7;           // sidebar left/right padding
    this.SB_TW    = 65 - 14;     // sidebar text wrap width (51 mm)
    this.MN_X     = 68;          // main content left edge
    this.MN_W     = 134;         // main content width (210 - 68 - 8)
    this.PG_H     = 297;
    this.PG_W     = 210;
    this.PHOTO_W  = 28;
    this.PHOTO_H  = 28;

    // ── Palette ──────────────────────────────────────────────────────────────
    this.C = {
      sidebar   : [13, 22, 45],        // deep navy
      sidebarMid: [22, 38, 75],        // slightly lighter navy for photo bg
      accent    : [56, 189, 248],      // sky-400
      white     : [255, 255, 255],
      dark      : [15, 23, 42],        // main text
      mid       : [71, 85, 105],       // body text
      light     : [148, 163, 184],     // muted text
      border    : [226, 232, 240],     // divider
      sectionBg : [241, 245, 249],     // section header background
      sideContact: [180, 200, 225],    // sidebar contact value text
    };
  }

  // ── Utilities ──────────────────────────────────────────────────────────────

  /** Strip emojis / non-Latin glyphs that jsPDF standard fonts cannot render. */
  clean(str = "") {
    return str
      .replace(/[\u{1F000}-\u{1FFFF}]/gu, "")
      .replace(/[\u{2500}-\u{27BF}]/gu, "")
      .replace(/[\u{FE00}-\u{FEFF}]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /** Fetch a remote image and return it as a base64 data-URL. */
  async fetchBase64(url) {
    try {
      const res  = await fetch(url, { mode: "cors" });
      const blob = await res.blob();
      return await new Promise((resolve, reject) => {
        const reader  = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (e) {
      console.warn("Could not load profile image:", e);
      return null;
    }
  }

  /** Add a new page and redraw the structural chrome (sidebar bg + accent strips). */
  addPage() {
    this.doc.addPage();
    this._drawChrome();
  }

  /** Check vertical overflow and add page if needed; returns updated y. */
  checkBreak(y, needed) {
    if (y + needed > this.PG_H - 12) {
      this.addPage();
      return 14;
    }
    return y;
  }

  // ── Drawing helpers ───────────────────────────────────────────────────────

  _drawChrome() {
    const d = this.doc;
    // Sidebar background
    d.setFillColor(...this.C.sidebar);
    d.rect(0, 0, this.SB_W, this.PG_H, "F");
    // Sidebar accent strip (top)
    d.setFillColor(...this.C.accent);
    d.rect(0, 0, this.SB_W, 3, "F");
    // Main area accent strip (top)
    d.setFillColor(...this.C.accent);
    d.rect(this.MN_X, 0, this.PG_W - this.MN_X, 3, "F");
  }

  /** Sidebar: horizontal rule */
  _sbRule(y) {
    this.doc.setDrawColor(30, 48, 82);
    this.doc.setLineWidth(0.15);
    this.doc.line(this.SB_PAD, y, this.SB_W - this.SB_PAD, y);
  }

  /** Sidebar: section heading + underline accent, returns new y */
  _sbHeading(label, y) {
    const d = this.doc;
    d.setFont("helvetica", "bold");
    d.setFontSize(7.5);
    d.setTextColor(...this.C.accent);
    d.text(label, this.SB_PAD, y);
    d.setDrawColor(...this.C.accent);
    d.setLineWidth(0.25);
    d.line(this.SB_PAD, y + 1, this.SB_W - this.SB_PAD, y + 1);
    return y + 6;
  }

  /** Main: section header bar with left accent, returns new y */
  _mnHeading(label, x, y) {
    const d   = this.doc;
    const w   = this.MN_W;
    // Light background bar
    d.setFillColor(...this.C.sectionBg);
    d.rect(x - 2, y - 3.5, w + 4, 7, "F");
    // Left accent bar
    d.setFillColor(...this.C.accent);
    d.rect(x - 2, y - 3.5, 2.5, 7, "F");
    // Label
    d.setFont("helvetica", "bold");
    d.setFontSize(8.5);
    d.setTextColor(...this.C.dark);
    d.text(label, x + 3, y);
    return y + 8;
  }

  /** Main: accent bullet + wrapped text, returns new y */
  _bullet(text, x, y, maxW) {
    const d     = this.doc;
    const lines = d.splitTextToSize(this.clean(text), maxW - 5);
    d.setFillColor(...this.C.accent);
    d.circle(x + 1.5, y - 1.1, 0.75, "F");
    d.setFont("helvetica", "normal");
    d.setFontSize(8);
    d.setTextColor(...this.C.mid);
    lines.forEach((ln, i) => d.text(ln, x + 5, y + i * 4.2));
    return y + lines.length * 4.2 + 1.5;
  }

  // ── Main generation entry point ───────────────────────────────────────────

  async generatePDF() {
    const { personalInfo, summary, skills, experience,
            education, certifications, languages }  = resumeData;

    this.doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    this._drawChrome();

    // Fetch profile photo
    const photoUrl  = "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg";
    const photoB64  = await this.fetchBase64(photoUrl);

    this._renderSidebar(personalInfo, skills, languages, certifications, photoB64);
    this._renderMain(personalInfo, summary, experience, education);

    return this.doc;
  }

  // ── Sidebar ───────────────────────────────────────────────────────────────

  _renderSidebar(personalInfo, skills, languages, certifications, photoB64) {
    const d   = this.doc;
    const tx  = this.SB_PAD;
    const tw  = this.SB_TW;
    const cx  = this.SB_W / 2;
    let   y   = 8;

    // ── Profile photo ──────────────────────────────────────────────────────
    const pw = this.PHOTO_W, ph = this.PHOTO_H;
    const px = cx - pw / 2;
    // Accent border rect
    d.setDrawColor(...this.C.accent);
    d.setLineWidth(1);
    d.rect(px - 1, y - 1, pw + 2, ph + 2, "S");

    if (photoB64) {
      try {
        d.addImage(photoB64, "JPEG", px, y, pw, ph);
      } catch (_) {
        this._photoPlaceholder(cx, y + ph / 2, pw / 2);
      }
    } else {
      this._photoPlaceholder(cx, y + ph / 2, pw / 2);
    }
    y += ph + 7;

    // ── Name ───────────────────────────────────────────────────────────────
    const nameParts  = (personalInfo.name || "Heshan Deemantha").split(" ");
    const firstName  = nameParts[0];
    const restName   = nameParts.slice(1).join(" ");
    d.setFont("helvetica", "bold");
    d.setFontSize(12);
    d.setTextColor(...this.C.white);
    d.text(firstName, cx, y, { align: "center" });
    y += 5.5;
    if (restName) {
      d.text(restName, cx, y, { align: "center" });
      y += 5.5;
    }

    // ── Title ──────────────────────────────────────────────────────────────
    d.setFont("helvetica", "normal");
    d.setFontSize(6.8);
    d.setTextColor(...this.C.accent);
    d.splitTextToSize(personalInfo.title || "Full-Stack Developer", tw)
     .forEach(l => { d.text(l, cx, y, { align: "center" }); y += 4; });
    y += 3;

    this._sbRule(y); y += 5;

    // ── Contact ────────────────────────────────────────────────────────────
    y = this._sbHeading("CONTACT", y);
    [
      ["EMAIL",    personalInfo.email],
      ["PHONE",    personalInfo.phone],
      ["LOCATION", personalInfo.location],
      ["LINKEDIN", personalInfo.linkedin],
      ["GITHUB",   personalInfo.github],
    ].forEach(([label, value]) => {
      if (!value) return;
      d.setFont("helvetica", "bold");
      d.setFontSize(6);
      d.setTextColor(...this.C.accent);
      d.text(label, tx, y);
      y += 3.2;
      d.setFont("helvetica", "normal");
      d.setFontSize(7);
      d.setTextColor(...this.C.sideContact);
      d.splitTextToSize(value, tw).forEach(l => { d.text(l, tx, y); y += 3.8; });
      y += 0.8;
    });
    y += 2; this._sbRule(y); y += 5;

    // ── Technical Skills (top 10) ──────────────────────────────────────────
    y = this._sbHeading("TECHNICAL SKILLS", y);
    skills.technical.slice(0, 10).forEach(skill => {
      d.setFillColor(...this.C.accent);
      d.circle(tx + 1.5, y - 1.2, 0.7, "F");
      d.setFont("helvetica", "normal");
      d.setFontSize(7.5);
      d.setTextColor(200, 218, 240);
      d.text(skill, tx + 4.5, y);
      y += 4.5;
    });
    y += 2; this._sbRule(y); y += 5;

    // ── Languages ─────────────────────────────────────────────────────────
    y = this._sbHeading("LANGUAGES", y);
    languages.forEach(lang => {
      d.setFont("helvetica", "bold");
      d.setFontSize(7.5);
      d.setTextColor(...this.C.white);
      d.text(lang.language, tx, y);
      d.setFont("helvetica", "normal");
      d.setFontSize(7);
      d.setTextColor(...this.C.accent);
      d.text(lang.proficiency, this.SB_W - tx, y, { align: "right" });
      y += 5;
    });
    y += 2; this._sbRule(y); y += 5;

    // ── Certifications ────────────────────────────────────────────────────
    y = this._sbHeading("CERTIFICATIONS", y);
    certifications.forEach(cert => {
      d.setFont("helvetica", "bold");
      d.setFontSize(7.5);
      d.setTextColor(...this.C.white);
      d.splitTextToSize(cert.name, tw).forEach(l => { d.text(l, tx, y); y += 4; });
      d.setFont("helvetica", "normal");
      d.setFontSize(6.5);
      d.setTextColor(...this.C.accent);
      d.text(`${cert.issuer}  •  ${cert.date}`, tx, y);
      y += 7;
    });
  }

  _photoPlaceholder(cx, cy, r) {
    const d = this.doc;
    d.setFillColor(...this.C.sidebarMid);
    d.circle(cx, cy, r, "F");
    d.setFont("helvetica", "bold");
    d.setFontSize(13);
    d.setTextColor(...this.C.accent);
    d.text("HD", cx, cy + 2.5, { align: "center" });
  }

  // ── Main content ──────────────────────────────────────────────────────────

  _renderMain(personalInfo, summary, experience, education) {
    const d = this.doc;
    const x = this.MN_X;
    const w = this.MN_W;
    let   y = 7;

    // ── Name header ────────────────────────────────────────────────────────
    const nameParts = (personalInfo.name || "Heshan Deemantha").split(" ");
    const first     = nameParts.slice(0, -1).join(" ");
    const last      = nameParts[nameParts.length - 1];
    d.setFont("helvetica", "bold");
    d.setFontSize(22);
    d.setTextColor(...this.C.dark);
    const firstW = d.getTextWidth(first + " ");
    d.text(first, x, y + 8);
    d.setTextColor(...this.C.accent);
    d.text(last, x + firstW, y + 8);
    y += 14;

    d.setFont("helvetica", "normal");
    d.setFontSize(9.5);
    d.setTextColor(...this.C.mid);
    d.text(personalInfo.title || "Full-Stack Developer & Cloud Engineer", x, y);
    y += 5;

    // Thin horizontal rule
    d.setDrawColor(...this.C.border);
    d.setLineWidth(0.3);
    d.line(x, y, x + w, y);
    y += 7;

    // ── Professional Summary ───────────────────────────────────────────────
    y = this._mnHeading("PROFESSIONAL SUMMARY", x, y);
    d.setFont("helvetica", "normal");
    d.setFontSize(8.5);
    d.setTextColor(...this.C.mid);
    d.splitTextToSize(this.clean(summary || ""), w)
     .forEach(l => { d.text(l, x, y); y += 4.5; });
    y += 5;

    // ── Work Experience ───────────────────────────────────────────────────
    y = this._mnHeading("WORK EXPERIENCE", x, y);
    experience.forEach(exp => {
      y = this.checkBreak(y, 35);

      // Job title + date
      d.setFont("helvetica", "bold");
      d.setFontSize(9.5);
      d.setTextColor(...this.C.dark);
      d.text(this.clean(exp.position), x, y);
      d.setFont("helvetica", "normal");
      d.setFontSize(8);
      d.setTextColor(...this.C.light);
      d.text(exp.duration, x + w, y, { align: "right" });
      y += 5;

      // Company | Location
      d.setFont("helvetica", "normal");
      d.setFontSize(8.5);
      d.setTextColor(...this.C.accent);
      d.text(`${exp.company}  |  ${exp.location}`, x, y);
      y += 5.5;

      // Achievements
      exp.achievements.forEach(ach => {
        y = this.checkBreak(y, 10);
        y = this._bullet(ach, x, y, w);
      });
      y += 4;
    });

    // ── Education ─────────────────────────────────────────────────────────
    y = this.checkBreak(y, 30);
    y = this._mnHeading("EDUCATION", x, y);
    education.forEach(edu => {
      d.setFont("helvetica", "bold");
      d.setFontSize(9.5);
      d.setTextColor(...this.C.dark);
      d.text(this.clean(edu.degree), x, y);
      d.setFont("helvetica", "normal");
      d.setFontSize(8);
      d.setTextColor(...this.C.light);
      d.text(edu.duration, x + w, y, { align: "right" });
      y += 5;
      d.setFont("helvetica", "normal");
      d.setFontSize(8.5);
      d.setTextColor(...this.C.accent);
      d.text(`${edu.institution}  |  ${edu.location}`, x, y);
      y += 5;
      (edu.achievements || []).forEach(ach => {
        y = this.checkBreak(y, 10);
        y = this._bullet(ach, x, y, w);
      });
      y += 4;
    });

    // ── Key Projects ──────────────────────────────────────────────────────
    y = this.checkBreak(y, 30);
    y = this._mnHeading("KEY PROJECTS", x, y);
    resumeData.projects.slice(0, 3).forEach(proj => {
      y = this.checkBreak(y, 24);

      // Name + GitHub link
      d.setFont("helvetica", "bold");
      d.setFontSize(9.5);
      d.setTextColor(...this.C.dark);
      d.text(proj.name, x, y);
      if (proj.github && proj.github !== ".." && proj.github !== "still-building") {
        d.setFontSize(7);
        d.setTextColor(...this.C.accent);
        d.text("GitHub", x + w, y, { align: "right" });
        d.link(x + w - 14, y - 3, 14, 4, { url: proj.github });
      }
      y += 5;

      // Tech stack
      d.setFont("helvetica", "italic");
      d.setFontSize(7.5);
      d.setTextColor(...this.C.accent);
      d.text(proj.technologies.join(" · "), x, y);
      y += 4.5;

      // 2 feature bullets (stripped of emojis)
      (proj.features || []).slice(0, 2).forEach(f => {
        y = this.checkBreak(y, 8);
        y = this._bullet(f, x, y, w);
      });
      y += 3;
    });

    // ── References ────────────────────────────────────────────────────────
    y = this.checkBreak(y, 25);
    y = this._mnHeading("REFERENCES", x, y);
    if (resumeData.references && resumeData.references.length) {
      resumeData.references.forEach(ref => {
        d.setFont("helvetica", "bold");
        d.setFontSize(9);
        d.setTextColor(...this.C.dark);
        d.text(ref.name, x, y);
        y += 4.5;
        d.setFont("helvetica", "normal");
        d.setFontSize(8);
        d.setTextColor(...this.C.mid);
        d.text(`${ref.position}  |  ${ref.company}`, x, y);
        y += 4.5;
        d.setTextColor(...this.C.accent);
        d.text(ref.contact, x, y);
        y += 6;
      });
    } else {
      d.setFont("helvetica", "italic");
      d.setFontSize(8.5);
      d.setTextColor(...this.C.light);
      d.text("Available upon request.", x, y);
    }
  }

  // ── Public API ────────────────────────────────────────────────────────────

  async downloadResume() {
    const pdf = await this.generatePDF();
    pdf.save("Heshan_Deemantha_Resume.pdf");
  }
}

export default ResumeGenerator;
