import jsPDF from "jspdf";

import {
  Resume,
  ResumeCertificate,
  ResumeEducation,
  ResumeExperience,
  ResumeLanguage,
  ResumeSkill,
} from "./resume";

/* =========================================================
   PDF SETTINGS
========================================================= */

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;

const MARGIN_X = 15;
const TOP_MARGIN = 14;
const BOTTOM_MARGIN = 13;

const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

const HEADER_HEIGHT = 42;
const PROFILE_GAP = 7;
const BODY_GAP = 8;

const SIDEBAR_WIDTH = 55;
const BODY_GAP_HORIZONTAL = 8;

const EXPERIENCE_WIDTH = CONTENT_WIDTH - SIDEBAR_WIDTH - BODY_GAP_HORIZONTAL;

/* =========================================================
   COLORS
========================================================= */

const CYAN: [number, number, number] = [8, 145, 178];

const DARK: [number, number, number] = [15, 23, 42];

const TEXT: [number, number, number] = [51, 65, 85];

const MUTED: [number, number, number] = [100, 116, 139];

const LIGHT: [number, number, number] = [226, 232, 240];

const SIDEBAR: [number, number, number] = [248, 250, 252];

const WHITE: [number, number, number] = [255, 255, 255];

/* =========================================================
   BASIC HELPERS
========================================================= */

function clean(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim();
}

function safeText(value: unknown): string {
  return clean(value);
}

function getDisplayName(resume: Resume): string {
  return safeText(resume.fullName);
}

function getTitle(resume: Resume): string {
  return safeText(resume.title);
}

function getProfile(resume: Resume): string {
  return safeText(resume.bio);
}

function cleanUrl(value: unknown): string {
  return safeText(value).replace(/^https?:\/\//i, "");
}

/* =========================================================
   PAGE MANAGEMENT
========================================================= */

function ensurePageSpace(
  pdf: jsPDF,
  y: number,
  requiredHeight: number,
): number {
  if (y + requiredHeight > PAGE_HEIGHT - BOTTOM_MARGIN) {
    pdf.addPage();

    return TOP_MARGIN;
  }

  return y;
}

/* =========================================================
   DRAWING HELPERS
========================================================= */

function drawLine(
  pdf: jsPDF,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: [number, number, number] = LIGHT,
  lineWidth = 0.35,
) {
  pdf.setDrawColor(...color);
  pdf.setLineWidth(lineWidth);

  pdf.line(x1, y1, x2, y2);
}

function drawSectionHeading(
  pdf: jsPDF,
  title: string,
  x: number,
  y: number,
  width: number,
): number {
  const heading = safeText(title);

  if (!heading) {
    return y;
  }

  pdf.setFont("helvetica", "bold");

  pdf.setFontSize(11);

  pdf.setTextColor(...DARK);

  pdf.text(heading, x, y);

  const lineY = y + 2.5;

  drawLine(pdf, x, lineY, x + width, lineY, LIGHT, 0.4);

  return y + 9;
}

function drawSidebarHeading(
  pdf: jsPDF,
  title: string,
  x: number,
  y: number,
  width: number,
): number {
  const heading = safeText(title);

  if (!heading) {
    return y;
  }

  pdf.setFont("helvetica", "bold");

  pdf.setFontSize(9);

  pdf.setTextColor(...DARK);

  pdf.text(heading, x, y);

  drawLine(pdf, x, y + 2, x + width, y + 2, CYAN, 0.8);

  return y + 7;
}

function drawTimelineDot(pdf: jsPDF, x: number, y: number) {
  pdf.setFillColor(...CYAN);

  pdf.circle(x, y, 1.5, "F");
}

function drawSmallCheck(pdf: jsPDF, x: number, y: number) {
  pdf.setDrawColor(...CYAN);
  pdf.setLineWidth(0.8);

  pdf.line(x, y, x + 1.2, y + 1.2);

  pdf.line(x + 1.2, y + 1.2, x + 3.3, y - 1.5);
}

/* =========================================================
   HEADER
========================================================= */

function drawHeader(pdf: jsPDF, resume: Resume): number {
  const x = MARGIN_X;
  const y = TOP_MARGIN;

  const name = getDisplayName(resume);
  const title = getTitle(resume);

  pdf.setFillColor(...DARK);

  pdf.roundedRect(x, y, CONTENT_WIDTH, HEADER_HEIGHT, 4, 4, "F");

  let textY = y + 12;

  if (name) {
    pdf.setFont("helvetica", "bold");

    pdf.setFontSize(20);

    pdf.setTextColor(...WHITE);

    pdf.text(name, x + 7, textY);

    textY += 8;
  }

  if (title) {
    pdf.setFont("helvetica", "normal");

    pdf.setFontSize(10);

    pdf.setTextColor(...CYAN);

    pdf.text(title, x + 7, textY);
  }

  const contactX = x + CONTENT_WIDTH - 7;

  let contactY = y + 10;

  const contactItems = [
    safeText(resume.email),
    safeText(resume.phone),
    safeText(resume.location),
    cleanUrl(resume.website),
  ].filter(Boolean);

  pdf.setFont("helvetica", "normal");

  pdf.setFontSize(7.5);

  pdf.setTextColor(...WHITE);

  for (const item of contactItems) {
    pdf.text(item, contactX, contactY, {
      align: "right",
    });

    contactY += 5.5;
  }

  return y + HEADER_HEIGHT;
}

/* =========================================================
   PROFILE
========================================================= */

function drawProfile(
  pdf: jsPDF,
  resume: Resume,
  x: number,
  startY: number,
  width: number,
): number {
  const profile = getProfile(resume);

  if (!profile) {
    return startY;
  }

  let y = startY;

  y = drawSectionHeading(pdf, "Profile", x, y, width);

  pdf.setFont("helvetica", "normal");

  pdf.setFontSize(8.5);

  pdf.setTextColor(...TEXT);

  const lines = pdf.splitTextToSize(profile, width);

  pdf.text(lines, x, y);

  y += lines.length * 4.2;

  return y + 4;
}

/* =========================================================
   EXPERIENCE
========================================================= */

function drawExperience(
  pdf: jsPDF,
  experience: ResumeExperience[],
  x: number,
  startY: number,
  width: number,
): number {
  const items = Array.isArray(experience) ? experience : [];

  if (!items.length) {
    return startY;
  }

  let y = startY;

  y = drawSectionHeading(pdf, "Experience", x, y, width);

  const timelineX = x + 2;

  for (const item of items) {
    const company = safeText(item.company);

    const role = safeText(item.position) || safeText(item.title);

    const location = safeText(item.location);

    const startDate = safeText(item.startDate);

    const endDate = safeText(item.endDate);

    const description = safeText(item.description);

    if (!company && !role && !description) {
      continue;
    }

    y = ensurePageSpace(pdf, y, 30);

    drawTimelineDot(pdf, timelineX, y + 1);

    if (role) {
      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(9);

      pdf.setTextColor(...DARK);

      pdf.text(role, x + 7, y + 2);

      y += 5;
    }

    if (company) {
      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(8);

      pdf.setTextColor(...CYAN);

      pdf.text(company, x + 7, y);

      y += 4;
    }

    const metadata = [
      [startDate, endDate].filter(Boolean).join(" - "),
      location,
    ].filter(Boolean);

    if (metadata.length) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(7);

      pdf.setTextColor(...MUTED);

      pdf.text(metadata.join("  |  "), x + 7, y);

      y += 4;
    }

    if (description) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(8);

      pdf.setTextColor(...TEXT);

      const lines = pdf.splitTextToSize(description, width - 7);

      pdf.text(lines, x + 7, y);

      y += lines.length * 3.8;
    }

    y += 5;

    drawLine(pdf, x + 7, y, x + width, y, LIGHT, 0.3);

    y += 5;
  }

  return y;
}

/* =========================================================
   EDUCATION
========================================================= */

function drawEducation(
  pdf: jsPDF,
  education: ResumeEducation[],
  x: number,
  startY: number,
  width: number,
): number {
  const items = Array.isArray(education) ? education : [];

  if (!items.length) {
    return startY;
  }

  let y = startY;

  y = drawSidebarHeading(pdf, "Education", x, y, width);

  for (const item of items) {
    const institution = safeText(item.institution);

    const qualification = safeText(item.degree) || safeText(item.qualification);

    const field = safeText(item.fieldOfStudy);

    const startDate = safeText(item.startDate);

    const endDate = safeText(item.endDate);

    if (!institution && !qualification) {
      continue;
    }

    y = ensurePageSpace(pdf, y, 22);

    if (qualification) {
      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(7.8);

      pdf.setTextColor(...DARK);

      const lines = pdf.splitTextToSize(qualification, width);

      pdf.text(lines, x, y);

      y += lines.length * 3.5;
    }

    if (institution) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(7.2);

      pdf.setTextColor(...CYAN);

      const lines = pdf.splitTextToSize(institution, width);

      pdf.text(lines, x, y);

      y += lines.length * 3.4;
    }

    if (field) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.8);

      pdf.setTextColor(...TEXT);

      const lines = pdf.splitTextToSize(field, width);

      pdf.text(lines, x, y);

      y += lines.length * 3.2;
    }

    const dates = [startDate, endDate].filter(Boolean).join(" - ");

    if (dates) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.5);

      pdf.setTextColor(...MUTED);

      pdf.text(dates, x, y);

      y += 3.5;
    }

    y += 4;
  }

  return y;
}

/* =========================================================
   CERTIFICATES
========================================================= */

function drawCertificates(
  pdf: jsPDF,
  certificates: ResumeCertificate[],
  x: number,
  startY: number,
  width: number,
): number {
  const items = Array.isArray(certificates) ? certificates : [];

  if (!items.length) {
    return startY;
  }

  let y = startY;

  y = drawSidebarHeading(pdf, "Certificates", x, y, width);

  for (const certificate of items) {
    const name = safeText(certificate.name) || safeText(certificate.title);

    const issuer =
      safeText(certificate.issuer) || safeText(certificate.organization);

    const date = safeText(certificate.date) || safeText(certificate.issueDate);

    if (!name) {
      continue;
    }

    y = ensurePageSpace(pdf, y, 18);

    drawSmallCheck(pdf, x, y - 1);

    pdf.setFont("helvetica", "bold");

    pdf.setFontSize(7.3);

    pdf.setTextColor(...DARK);

    const nameLines = pdf.splitTextToSize(name, width - 5);

    pdf.text(nameLines, x + 5, y);

    y += nameLines.length * 3.4;

    if (issuer) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.7);

      pdf.setTextColor(...CYAN);

      const issuerLines = pdf.splitTextToSize(issuer, width - 5);

      pdf.text(issuerLines, x + 5, y);

      y += issuerLines.length * 3.2;
    }

    if (date) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.5);

      pdf.setTextColor(...MUTED);

      pdf.text(date, x + 5, y);

      y += 3.2;
    }

    y += 3;
  }

  return y;
}

/* =========================================================
   PROFESSIONAL SKILLS
========================================================= */

function drawSkills(
  pdf: jsPDF,
  skills: ResumeSkill[],
  x: number,
  startY: number,
  width: number,
): number {
  const items = Array.isArray(skills) ? skills : [];

  if (!items.length) {
    return startY;
  }

  let y = startY;

  y = drawSidebarHeading(pdf, "Professional Skills", x, y, width);

  for (const skill of items) {
    const name = safeText(skill.name);

    const level = safeText(skill.level);

    if (!name) {
      continue;
    }

    y = ensurePageSpace(pdf, y, 15);

    pdf.setFont("helvetica", "bold");

    pdf.setFontSize(7.5);

    pdf.setTextColor(...DARK);

    const nameLines = pdf.splitTextToSize(name, width);

    pdf.text(nameLines, x, y);

    y += nameLines.length * 3.5;

    if (level) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.7);

      pdf.setTextColor(...MUTED);

      const levelLines = pdf.splitTextToSize(level, width);

      pdf.text(levelLines, x, y);

      y += levelLines.length * 3.2;
    }

    y += 3;
  }

  return y;
}

/* =========================================================
   LANGUAGES
========================================================= */

function drawLanguages(
  pdf: jsPDF,
  languages: ResumeLanguage[],
  x: number,
  startY: number,
  width: number,
): number {
  const items = Array.isArray(languages) ? languages : [];

  if (!items.length) {
    return startY;
  }

  let y = startY;

  y = drawSidebarHeading(pdf, "Languages", x, y, width);

  for (const language of items) {
    const name = safeText(language.name);

    const level = safeText(language.level);

    if (!name) {
      continue;
    }

    y = ensurePageSpace(pdf, y, 12);

    pdf.setFont("helvetica", "bold");

    pdf.setFontSize(7.3);

    pdf.setTextColor(...DARK);

    pdf.text(name, x, y);

    if (level) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.7);

      pdf.setTextColor(...MUTED);

      pdf.text(level, x + width, y, {
        align: "right",
      });
    }

    y += 5;
  }

  return y;
}

/* =========================================================
   SIDEBAR BACKGROUND
========================================================= */

function drawSidebarBackground(
  pdf: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  pdf.setFillColor(...SIDEBAR);

  pdf.roundedRect(x, y, width, height, 3, 3, "F");
}

/* =========================================================
   FOOTER
========================================================= */

function drawFooter(pdf: jsPDF, resume: Resume) {
  const pageCount = pdf.getNumberOfPages();

  const footerText = getTitle(resume);

  for (let page = 1; page <= pageCount; page++) {
    pdf.setPage(page);

    const y = PAGE_HEIGHT - 7;

    drawLine(pdf, MARGIN_X, y - 3, PAGE_WIDTH - MARGIN_X, y - 3, LIGHT, 0.3);

    if (footerText) {
      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(6.5);

      pdf.setTextColor(...MUTED);

      pdf.text(footerText, MARGIN_X, y);
    }

    pdf.setFont("helvetica", "normal");

    pdf.setFontSize(6.5);

    pdf.setTextColor(...MUTED);

    pdf.text(`Page ${page} of ${pageCount}`, PAGE_WIDTH - MARGIN_X, y, {
      align: "right",
    });
  }
}

/* =========================================================
   MAIN PDF GENERATOR
========================================================= */

export function generateResumePDF(resume: Resume): Blob {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  /* -------------------------------------------------------
     HEADER
  ------------------------------------------------------- */

  const headerBottom = drawHeader(pdf, resume);

  /* -------------------------------------------------------
     BODY START
  ------------------------------------------------------- */

  const bodyStartY = headerBottom + PROFILE_GAP;

  const bodyX = MARGIN_X;

  const sidebarX = bodyX + EXPERIENCE_WIDTH + BODY_GAP_HORIZONTAL;

  /* -------------------------------------------------------
     PROFILE
  ------------------------------------------------------- */

  let mainY = bodyStartY;

  mainY = drawProfile(pdf, resume, bodyX, mainY, CONTENT_WIDTH);

  mainY += BODY_GAP;

  /* -------------------------------------------------------
     TWO-COLUMN BODY
  ------------------------------------------------------- */

  const experienceStartY = mainY;

  const sidebarStartY = mainY;

  /* -------------------------------------------------------
     SIDEBAR BACKGROUND
  ------------------------------------------------------- */

  drawSidebarBackground(
    pdf,
    sidebarX - 5,
    sidebarStartY - 5,
    SIDEBAR_WIDTH + 10,
    PAGE_HEIGHT - sidebarStartY - BOTTOM_MARGIN + 5,
  );

  /* -------------------------------------------------------
     EXPERIENCE
  ------------------------------------------------------- */

  drawExperience(
    pdf,
    resume.experience || [],
    bodyX,
    experienceStartY,
    EXPERIENCE_WIDTH,
  );

  /* -------------------------------------------------------
     SIDEBAR
  ------------------------------------------------------- */

  let sidebarY = sidebarStartY;

  sidebarY = drawEducation(
    pdf,
    resume.education || [],
    sidebarX,
    sidebarY,
    SIDEBAR_WIDTH,
  );

  sidebarY += 3;

  sidebarY = drawCertificates(
    pdf,
    resume.certificates || [],
    sidebarX,
    sidebarY,
    SIDEBAR_WIDTH,
  );

  sidebarY += 3;

  sidebarY = drawSkills(
    pdf,
    resume.skills || [],
    sidebarX,
    sidebarY,
    SIDEBAR_WIDTH,
  );

  sidebarY += 3;

  drawLanguages(pdf, resume.languages || [], sidebarX, sidebarY, SIDEBAR_WIDTH);

  /* -------------------------------------------------------
     FOOTER
  ------------------------------------------------------- */

  drawFooter(pdf, resume);

  return pdf.output("blob");
}

/* =========================================================
   DOWNLOAD PDF
========================================================= */

export function downloadResumePDF(resume: Resume) {
  const blob = generateResumePDF(resume);

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${getDisplayName(resume) || "Resume"}-Resume.pdf`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
