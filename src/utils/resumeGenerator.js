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

      const imgWidth = 210; // A4 width
      const pageHeight = 297;  // A4 hieght
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

  // Create resume element with professional two-column layout matching the screenshot
  createResumeElement() {
    const div = document.createElement("div");
    div.classList.add("resume-container");
    div.innerHTML = this.getResumeHTML();

    // Attach CSS matching the screenshot style
    const style = document.createElement("style");
    style.textContent = `
      .resume-container {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #ffffff;
        color: #333333;
        box-sizing: border-box;
        display: flex;
        line-height: 1.4;
      }
      
      /* Left Sidebar - Dark Background */
      .sidebar {
        width: 35%;
        background: #2c3e50;
        color: white;
        padding: 25px 20px;
        border-radius: 8px 0 0 8px;
      }
      
      /* Main Content Area */
      .main-section {
        width: 65%;
        padding: 25px 30px;
        background: #ffffff;
      }
      
      /* Header Styles */
      .resume-header {
        text-align: center;
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 2px solid rgba(255,255,255,0.2);
      }
      
      h1 { 
        font-size: 28px; 
        font-weight: 700; 
        margin: 0 0 8px 0; 
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      h2 { 
        font-size: 16px; 
        font-weight: 400; 
        margin: 0; 
        color: #ecf0f1;
        opacity: 0.9;
      }
      
      /* Section Headers */
      .section-title {
        font-size: 16px;
        font-weight: 600;
        margin: 25px 0 15px 0;
        padding-bottom: 8px;
        border-bottom: 2px solid #3498db;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #2c3e50;
      }
      
      .sidebar .section-title {
        color: white;
        border-bottom: 2px solid rgba(255,255,255,0.3);
        font-size: 15px;
      }
      
      /* Contact Info */
      .contact-info {
        text-align: center;
        margin-bottom: 20px;
      }
      
      .contact-item {
        margin: 8px 0;
        font-size: 13px;
        color: #ecf0f1;
      }
      
      /* Skills Section */
      .skills-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .skills-list li {
        margin-bottom: 10px;
        padding: 8px 12px;
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
        font-size: 13px;
        transition: all 0.3s ease;
      }
      
      .skills-list li:hover {
        background: rgba(255,255,255,0.2);
        transform: translateX(5px);
      }
      
      /* Experience & Education Blocks */
      .experience-block, .education-block, .project-block {
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ecf0f1;
      }

      .experience-block:last-child, .education-block:last-child, .project-block:last-child {
        border-bottom: none;
      }
      
      .job-title {
        font-size: 15px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 5px;
      }
      
      .company {
        font-size: 13px;
        color: #7f8c8d;
        font-style: italic;
        margin-bottom: 5px;
      }
      
      .date {
        font-size: 12px;
        color: #95a5a6;
        margin-bottom: 10px;
      }
      
      .responsibilities {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .responsibilities li {
        margin-bottom: 6px;
        padding-left: 15px;
        position: relative;
        font-size: 13px;
      }
      
      .responsibilities li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #3498db;
        font-weight: bold;
      }
      
      /* Summary Section */
      .summary-text {
        text-align: justify;
        font-size: 13px;
        line-height: 1.6;
        color: #555;
      }
      
      /* Languages */
      .language-item {
        margin-bottom: 8px;
        padding: 6px 10px;
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
        font-size: 13px;
      }
      
      /* References */
      .references {
        font-style: italic;
        color: #7f8c8d;
        font-size: 13px;
        text-align: center;
        margin-top: 20px;
      }
      
      /* Progress bars for skills (optional enhancement) */
      .skill-level {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4px;
      }
      
      .skill-bar {
        width: 60%;
        height: 4px;
        background: rgba(255,255,255,0.2);
        border-radius: 2px;
        overflow: hidden;
      }
      
      .skill-progress {
        height: 100%;
        background: #3498db;
        border-radius: 2px;
      }
      
      /* Print optimization */
      @media print {
        .resume-container {
          box-shadow: none;
          padding: 15mm;
        }
      }
    `;
    div.appendChild(style);

    return div;
  }

  // Generate HTML with layout matching the screenshot
  getResumeHTML() {
    // Using the data structure from your resumeData
    const { personalInfo, summary, skills, experience, education, certifications, languages } = resumeData;

    return `
      <div style="display:flex; width:100%; height:100%;">
        <!-- Left Sidebar -->
        <div class="sidebar">
          <div class="resume-header">
            <h1>${personalInfo.name || "Ashley Moore"}</h1>
            <h2>${personalInfo.title || "Retail Store Manager"}</h2>
          </div>

          <!-- Contact Information -->
          <div class="section">
            <h3 class="section-title">Contact</h3>
            <div class="contact-info">
              <div class="contact-item">${personalInfo.email || "ashley.moore@example.com"}</div>
              <div class="contact-item">${personalInfo.phone || "(123) 456-7890"}</div>
              <div class="contact-item">${personalInfo.location || "New York, NY"}</div>
              ${personalInfo.linkedin ? `<div class="contact-item">${personalInfo.linkedin}</div>` : ''}
              ${personalInfo.github ? `<div class="contact-item">${personalInfo.github}</div>` : ''}
            </div>
          </div>

          <!-- Technical Skills -->
          <div class="section">
            <h3 class="section-title">Technical Skills</h3>
            <ul class="skills-list">
              ${(skills.technical || ["JavaScript", "React.js", "Node.js", "MongoDB", "HTML5/CSS3"])
                .map(skill => `<li>${skill}</li>`).join("")}
            </ul>
          </div>

          <!-- Soft Skills -->
          <div class="section">
            <h3 class="section-title">Soft Skills</h3>
            <ul class="skills-list">
              ${(skills.soft || ["Problem Solving", "Team Collaboration", "Communication"])
                .map(skill => `<li>${skill}</li>`).join("")}
            </ul>
          </div>

          <!-- Languages -->
          <div class="section">
            <h3 class="section-title">Languages</h3>
            ${(languages && languages.length > 0 ? languages.map(lang => `
              <div class="language-item">
                ${lang.language} - ${lang.proficiency}
              </div>
            `).join("") : `
              <div class="language-item">English (Native)</div>
              <div class="language-item">Spanish (Intermediate)</div>
            `)}
          </div>

          <!-- Certifications -->
          <div class="section">
            <h3 class="section-title">Certifications</h3>
            ${(certifications && certifications.length > 0 ? certifications.map(cert => `
              <div class="language-item">
                <strong>${cert.name}</strong><br>
                <small>${cert.issuer} • ${cert.date}</small>
              </div>
            `).join("") : `
              <div class="language-item">
                <strong>Retail Management Certification</strong><br>
                <small>Retail Association • 2020</small>
              </div>
              <div class="language-item">
                <strong>Customer Service Excellence</strong><br>
                <small>Service Institute • 2019</small>
              </div>
            `)}
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-section">
          <!-- Professional Summary -->
          <div class="section">
            <h3 class="section-title">Professional Summary</h3>
            <p class="summary-text">
              ${summary || "High performing retail manager with extensive experience in store operations, team leadership, and customer service. Proven track record of driving sales, managing staff, and implementing effective training programs. Skilled in optimizing operations and improving overall store performance."}
            </p>
          </div>

          <!-- Work Experience -->
          <div class="section">
            <h3 class="section-title">Work Experience</h3>
            
            ${(experience && experience.length > 0 ? experience.map(exp => `
              <div class="experience-block">
                <div class="job-title">${exp.position}</div>
                <div class="company">${exp.company} • ${exp.location}</div>
                <div class="date">${exp.duration}</div>
                <ul class="responsibilities">
                  ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join("")}
                </ul>
              </div>
            `).join("") : `
              <!-- Default experience data matching the screenshot -->
              <div class="experience-block">
                <div class="job-title">Retail Store Manager</div>
                <div class="company">Fashion Retail Store • New York, NY</div>
                <div class="date">2019 - Present</div>
                <ul class="responsibilities">
                  <li>Successfully managed all aspects of store operations with a focus on sales growth</li>
                  <li>Led a team of 15+ employees, providing training and development opportunities</li>
                  <li>Implemented inventory management systems that reduced stock discrepancies by 25%</li>
                  <li>Developed and executed marketing campaigns that increased foot traffic by 18%</li>
                  <li>Maintained excellent customer service standards, achieving 95% satisfaction ratings</li>
                </ul>
              </div>
              
              <div class="experience-block">
                <div class="job-title">Assistant Store Manager</div>
                <div class="company">Department Store • New York, NY</div>
                <div class="date">2016 - 2019</div>
                <ul class="responsibilities">
                  <li>Assisted in daily store operations and staff management</li>
                  <li>Coordinated visual merchandising and product displays</li>
                  <li>Handled customer service escalations and resolved issues effectively</li>
                  <li>Managed inventory control and ordering processes</li>
                </ul>
              </div>
            `)}
          </div>

          <!-- Education -->
          <div class="section">
            <h3 class="section-title">Education</h3>

            ${(education && education.length > 0 ? education.map(edu => `
              <div class="education-block">
                <div class="job-title">${edu.degree}</div>
                <div class="company">${edu.institution} • ${edu.location}</div>
                <div class="date">${edu.duration}</div>
                ${edu.achievements && edu.achievements.length > 0 ? `
                  <ul class="responsibilities">
                    ${edu.achievements.map(achievement => `<li>${achievement}</li>`).join("")}
                  </ul>
                ` : ''}
              </div>
            `).join("") : `
              <div class="education-block">
                <div class="job-title">Bachelor of Business Administration</div>
                <div class="company">University of New York • New York, NY</div>
                <div class="date">2010 - 2014</div>
              </div>
            `)}
          </div>

          <!-- Projects -->
          <div class="section">
            <h3 class="section-title">Projects</h3>

            ${resumeData.projects ? resumeData.projects.map(proj => `
              <div class="project-block">
                <div class="job-title">${proj.name}</div>
                <div class="company">${proj.technologies.join(', ')}</div>
                <p class="summary-text">${proj.description}</p>
                <ul class="responsibilities">
                  ${proj.features.map(feature => `<li>${feature}</li>`).join("")}
                </ul>
              </div>
            `).join("") : ''}
          </div>

          <!-- References -->
           <div class="section">
             <h3 class="section-title">References</h3>
           <p class="references">Available upon request</p>
           </div>
        </div>
      </div>
    `;
  }

  // Download Resume PDF
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