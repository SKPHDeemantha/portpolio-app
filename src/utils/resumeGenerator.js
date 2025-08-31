import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { resumeData } from "../data/resumeData";

class ResumeGenerator {
  constructor() {
    this.doc = null;
  }

  // Generate PDF
  async generatePDF() {
    try {
      const resumeElement = this.createResumeElement();
      document.body.appendChild(resumeElement);

      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
      });

      document.body.removeChild(resumeElement);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      return pdf;
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw new Error("Failed to generate resume PDF");
    }
  }

  // Resume HTML with professional UI
  createResumeElement() {
    const div = document.createElement("div");
    div.classList.add("resume-container");
    div.innerHTML = this.getResumeHTML();

    // Attach professional CSS
    const style = document.createElement("style");
    style.textContent = `
      .resume-container {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #ffffff;
        color: #2d3748;
        box-sizing: border-box;
      }
      h1 { font-size: 26px; font-weight: 700; color: #1a202c; margin: 0; }
      h2 { font-size: 16px; font-weight: 600; color: #3182ce; margin: 0; }
      h3 { font-size: 15px; font-weight: 700; margin: 20px 0 10px; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; }
      h4 { font-size: 14px; font-weight: 600; color: #2d3748; margin: 0; }
      p, li, span, div { font-size: 12px; line-height: 1.5; }
      .resume-header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3182ce; padding-bottom: 12px; }
      .resume-subtitle { font-size: 12px; color: #718096; }
      .skills-badge { background: #3182ce; color: #fff; padding: 3px 8px; border-radius: 12px; font-size: 11px; display: inline-block; margin: 3px 4px 0 0; }
      .tools { color: #4a5568; margin-top: 6px; }
      .section { margin-bottom: 15px; }
      ul { padding-left: 18px; margin: 5px 0; }
      li { margin-bottom: 4px; }
      .project-tech { background: #edf2f7; color: #2d3748; padding: 2px 6px; border-radius: 6px; font-size: 10px; margin-right: 4px; display: inline-block; }
      .cert { margin-bottom: 8px; }
      .resume-footer { text-align: center; margin-top: 20px; font-size: 10px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 8px; }
    `;
    div.appendChild(style);

    return div;
  }

  // HTML Structure
  getResumeHTML() {
    // Defensive checks to avoid undefined errors
    const personalInfo = resumeData.personalInfo || {};
    const summary = resumeData.summary || "";
    const skills = resumeData.skills || { technical: [], tools: [] };
    const experience = resumeData.experience || [];
    const education = resumeData.education || [];
    const projects = resumeData.projects || [];
    const certifications = resumeData.certifications || [];
    const lastUpdated = resumeData.lastUpdated || "";

    return `
      <div>
        <!-- Header -->
        <div class="resume-header">
          <h1>${personalInfo.name || ""}</h1>
          <h2>${personalInfo.title || ""}</h2>
          <div class="resume-subtitle">
            ${personalInfo.email || ""} • ${personalInfo.phone || ""} • ${personalInfo.location || ""}<br>
            ${personalInfo.linkedin || ""} • ${personalInfo.github || ""} • ${personalInfo.portfolio || ""}
          </div>
        </div>

        <!-- Summary -->
        <div class="section">
          <h3>Professional Summary</h3>
          <p>${summary}</p>
        </div>

        <!-- Skills -->
        <div class="section">
          <h3>Technical Skills</h3>
          <div>
            ${(skills.technical || []).map(skill => `<span class="skills-badge">${skill}</span>`).join("")}
          </div>
          <div class="tools"><strong>Tools:</strong> ${(skills.tools || []).join(", ")}</div>
        </div>

        <!-- Experience -->
        <div class="section">
          <h3>Professional Experience</h3>
          ${experience.map(exp => `
            <div>
              <div style="display:flex; justify-content:space-between; align-items:baseline;">
                <h4>${exp.position || ""}</h4>
                <span class="resume-subtitle">${exp.duration || ""}</span>
              </div>
              <div style="color:#3182ce; font-weight:500; margin-bottom:4px;">${exp.company || ""} • ${exp.location || ""}</div>
              <ul>${(exp.achievements || []).map(a => `<li>${a}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>

        <!-- Education -->
        <div class="section">
          <h3>Education</h3>
          ${education.map(edu => `
            <div>
              <div style="display:flex; justify-content:space-between; align-items:baseline;">
                <h4>${edu.degree || ""}</h4>
                <span class="resume-subtitle">${edu.duration || ""}</span>
              </div>
              <div style="color:#3182ce; font-weight:500;">${edu.institution || ""} • ${edu.location || ""}</div>
              <div>GPA: ${edu.gpa || ""}</div>
              <ul>${(edu.achievements || []).map(a => `<li>${a}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>

        <!-- Projects -->
        <div class="section">
          <h3>Projects</h3>
          ${projects.map(project => `
            <div>
              <h4>${project.name || ""}</h4>
              <p>${project.description || ""}</p>
              <div>${(project.technologies || []).map(tech => `<span class="project-tech">${tech}</span>`).join("")}</div>
              <div class="resume-subtitle">GitHub: ${project.github || ""} | Live: ${project.live || ""}</div>
            </div>
          `).join("")}
        </div>

        <!-- Certifications -->
        <div class="section">
          <h3>Certifications</h3>
          ${certifications.map(cert => `
            <div class="cert">
              <div><strong>${cert.name || ""}</strong></div>
              <div class="resume-subtitle">${cert.issuer || ""} • ${cert.date || ""} • ${cert.credential || ""}</div>
            </div>
          `).join("")}
        </div>

        <!-- Footer -->
        <div class="resume-footer">
          Last updated: ${lastUpdated} | Generated from portfolio
        </div>
      </div>
    `;
  }

  // Download Resume
  async downloadResume() {
    try {
      const pdf = await this.generatePDF();
      pdf.save("Heshan_Deemantha_Resume.pdf");
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  }
}

export default ResumeGenerator;
