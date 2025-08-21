import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { resumeData } from '../data/resumeData';

class ResumeGenerator {
  constructor() {
    this.doc = null;
    this.margin = 40;
    this.lineHeight = 7;
    this.currentY = this.margin;
  }

  // Generate PDF from HTML template
  async generatePDF() {
    try {
      // Create a temporary div with the resume content
      const resumeElement = this.createResumeElement();
      document.body.appendChild(resumeElement);

      // Convert to canvas then to PDF
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      document.body.removeChild(resumeElement);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      return pdf;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate resume PDF');
    }
  }

  // Create HTML template for the resume
  createResumeElement() {
    const div = document.createElement('div');
    div.style.width = '210mm';
    div.style.minHeight = '297mm';
    div.style.padding = '20mm';
    div.style.backgroundColor = '#ffffff';
    div.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    div.style.color = '#2d3748';
    div.style.boxSizing = 'border-box';

    div.innerHTML = this.getResumeHTML();
    return div;
  }

  getResumeHTML() {
    return `
      <div style="max-width: 170mm; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3182ce; padding-bottom: 15px;">
          <h1 style="font-size: 28px; font-weight: bold; color: #2d3748; margin: 0 0 5px 0;">${resumeData.personalInfo.name}</h1>
          <h2 style="font-size: 16px; font-weight: 600; color: #3182ce; margin: 0 0 10px 0;">${resumeData.personalInfo.title}</h2>
          <div style="font-size: 12px; color: #718096;">
            ${resumeData.personalInfo.email} • ${resumeData.personalInfo.phone} • ${resumeData.personalInfo.location}
            <br>
            ${resumeData.personalInfo.linkedin} • ${resumeData.personalInfo.github} • ${resumeData.personalInfo.portfolio}
          </div>
        </div>

        <!-- Summary -->
        <div style="margin-bottom: 15px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">PROFESSIONAL SUMMARY</h3>
          <p style="font-size: 12px; line-height: 1.6; color: #4a5568; margin: 0;">${resumeData.summary}</p>
        </div>

        <!-- Skills -->
        <div style="margin-bottom: 15px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">TECHNICAL SKILLS</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
            ${resumeData.skills.technical.map(skill => 
              `<span style="background: #3182ce; color: white; padding: 4px 8px; border-radius: 12px; font-size: 11px;">${skill}</span>`
            ).join('')}
          </div>
          <div style="font-size: 12px; color: #4a5568;">
            <strong>Tools:</strong> ${resumeData.skills.tools.join(', ')}
          </div>
        </div>

        <!-- Experience -->
        <div style="margin-bottom: 15px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">PROFESSIONAL EXPERIENCE</h3>
          ${resumeData.experience.map(exp => `
            <div style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
                <h4 style="font-size: 14px; font-weight: 600; color: #2d3748; margin: 0;">${exp.position}</h4>
                <span style="font-size: 12px; color: #718096;">${exp.duration}</span>
              </div>
              <div style="font-size: 12px; color: #3182ce; font-weight: 500; margin-bottom: 5px;">${exp.company} • ${exp.location}</div>
              <ul style="font-size: 12px; color: #4a5568; margin: 0; padding-left: 15px;">
                ${exp.achievements.map(achievement => 
                  `<li style="margin-bottom: 3px;">${achievement}</li>`
                ).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Education -->
        <div style="margin-bottom: 15px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">EDUCATION</h3>
          ${resumeData.education.map(edu => `
            <div style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
                <h4 style="font-size: 14px; font-weight: 600; color: #2d3748; margin: 0;">${edu.degree}</h4>
                <span style="font-size: 12px; color: #718096;">${edu.duration}</span>
              </div>
              <div style="font-size: 12px; color: #3182ce; font-weight: 500; margin-bottom: 5px;">${edu.institution} • ${edu.location}</div>
              <div style="font-size: 12px; color: #4a5568; margin-bottom: 5px;">GPA: ${edu.gpa}</div>
              <ul style="font-size: 12px; color: #4a5568; margin: 0; padding-left: 15px;">
                ${edu.achievements.map(achievement => 
                  `<li style="margin-bottom: 3px;">${achievement}</li>`
                ).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Projects -->
        <div style="margin-bottom: 15px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">PROJECTS</h3>
          ${resumeData.projects.map(project => `
            <div style="margin-bottom: 12px;">
              <h4 style="font-size: 14px; font-weight: 600; color: #2d3748; margin: 0 0 5px 0;">${project.name}</h4>
              <p style="font-size: 12px; color: #4a5568; margin: 0 0 8px 0;">${project.description}</p>
              <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px;">
                ${project.technologies.map(tech => 
                  `<span style="background: #e2e8f0; color: #4a5568; padding: 2px 6px; border-radius: 8px; font-size: 10px;">${tech}</span>`
                ).join('')}
              </div>
              <div style="font-size: 11px; color: #718096;">
                GitHub: ${project.github} | Live: ${project.live}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Certifications -->
        <div style="margin-bottom: 15px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #2d3748; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">CERTIFICATIONS</h3>
          ${resumeData.certifications.map(cert => `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 12px; font-weight: 600; color: #2d3748;">${cert.name}</div>
              <div style="font-size: 11px; color: #718096;">${cert.issuer} • ${cert.date} • ${cert.credential}</div>
            </div>
          `).join('')}
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 10px; color: #718096;">
          Last updated: ${resumeData.lastUpdated} | Generated from portfolio
        </div>
      </div>
    `;
  }

  // Download the generated PDF
  async downloadResume() {
    try {
      const pdf = await this.generatePDF();
      pdf.save('Heshan_Deemantha_Resume.pdf');
      return true;
    } catch (error) {
      console.error('Error downloading resume:', error);
      return false;
    }
  }
}

export default ResumeGenerator;
