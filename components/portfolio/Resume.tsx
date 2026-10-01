"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  X,
  Award,
  Languages,
  Globe,
  ArrowDown,
} from "lucide-react";

import { getResume, Resume as ResumeData } from "@/lib/resume";
import api from "@/lib/api";

function ResumeViewer({
  resume,
  onClose,
}: {
  resume: ResumeData;
  onClose: () => void;
}) {
  const [downloading, setDownloading] = useState(false);

  const downloadPdf = async () => {
    if (downloading) return;

    try {
      setDownloading(true);

      const response = await api.get("/resume/download", {
        responseType: "blob",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${resume.fullName || "Resume"}-Resume.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Resume PDF download failed:", error);
      alert("Unable to download the Resume PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const experience = Array.isArray(resume.experience) ? resume.experience : [];

  const education = Array.isArray(resume.education) ? resume.education : [];

  const certificates = Array.isArray(resume.certificates)
    ? resume.certificates
    : [];

  const skills = Array.isArray(resume.skills) ? resume.skills : [];

  const languages = Array.isArray(resume.languages) ? resume.languages : [];

  return (
    <div className="resume-viewer-overlay">
      <div className="resume-viewer-container">
        {/* DOWNLOAD TOOLBAR */}
        <div className="resume-toolbar">
          <div className="resume-toolbar-title">
            <span>Resume Preview</span>
          </div>

          <div className="resume-toolbar-actions">
            <button
              type="button"
              onClick={downloadPdf}
              disabled={downloading}
              className="resume-download-button"
            >
              <Download size={16} />

              <span>{downloading ? "Downloading..." : "Download PDF"}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="resume-close-button"
              aria-label="Close resume"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* RESUME DOCUMENT */}
        <div className="resume-document">
          {/* HEADER */}
          <header className="resume-document-header">
            <div className="resume-header-left">
              <h1>{resume.fullName || "Professional Resume"}</h1>

              {resume.title && <p className="resume-title">{resume.title}</p>}
            </div>

            <div className="resume-contact-details">
              {resume.email && (
                <a href={`mailto:${resume.email}`}>
                  <Mail size={14} />
                  <span>{resume.email}</span>
                </a>
              )}

              {resume.phone && (
                <a href={`tel:${resume.phone}`}>
                  <Phone size={14} />
                  <span>{resume.phone}</span>
                </a>
              )}

              {resume.location && (
                <div>
                  <MapPin size={14} />
                  <span>{resume.location}</span>
                </div>
              )}

              {resume.website && (
                <a href={resume.website} target="_blank" rel="noreferrer">
                  <Globe size={14} />
                  <span>{resume.website}</span>
                </a>
              )}
            </div>
          </header>

          {/* CONTENT */}
          <div className="resume-document-content">
            {/* LEFT COLUMN */}
            <main className="resume-main-column">
              {/* PROFILE */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <BriefcaseBusiness size={16} />
                  <h2>Professional Profile</h2>
                </div>

                {resume.bio ? (
                  <p className="resume-profile-text">{resume.bio}</p>
                ) : (
                  <p className="resume-empty">
                    No professional profile available.
                  </p>
                )}
              </section>

              {/* EXPERIENCE */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <BriefcaseBusiness size={16} />
                  <h2>Professional Experience</h2>
                </div>

                {experience.length > 0 ? (
                  <div className="resume-experience-list">
                    {experience.map((item, index) => (
                      <div
                        key={
                          item._id ||
                          `${item.position}-${item.company}-${index}`
                        }
                        className="resume-experience-item"
                      >
                        <div className="resume-experience-heading">
                          {item.position && <h3>{item.position}</h3>}

                          {item.company && (
                            <p className="resume-company">{item.company}</p>
                          )}

                          {item.period && (
                            <p className="resume-period">{item.period}</p>
                          )}
                        </div>

                        {item.description && (
                          <p className="resume-description">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="resume-empty">
                    No professional experience available.
                  </p>
                )}
              </section>
            </main>

            {/* RIGHT COLUMN */}
            <aside className="resume-sidebar">
              {/* EDUCATION */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <GraduationCap size={16} />
                  <h2>Education</h2>
                </div>

                {education.length > 0 ? (
                  <div className="resume-sidebar-list">
                    {education.map((item, index) => (
                      <div
                        key={
                          item._id ||
                          `${item.qualification}-${item.school}-${index}`
                        }
                        className="resume-sidebar-item"
                      >
                        {item.qualification && (
                          <p className="resume-item-title">
                            {item.qualification}
                          </p>
                        )}

                        {item.school && (
                          <p className="resume-item-accent">{item.school}</p>
                        )}

                        {item.period && (
                          <p className="resume-item-period">{item.period}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="resume-empty">
                    No education information available.
                  </p>
                )}
              </section>

              {/* CERTIFICATES */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <Award size={16} />
                  <h2>Certificates</h2>
                </div>

                {certificates.length > 0 ? (
                  <div className="resume-sidebar-list">
                    {certificates.map((item, index) => (
                      <div
                        key={item._id || `${item.name}-${item.issuer}-${index}`}
                        className="resume-sidebar-item"
                      >
                        {item.name && (
                          <p className="resume-item-title">{item.name}</p>
                        )}

                        {item.issuer && (
                          <p className="resume-item-accent">{item.issuer}</p>
                        )}

                        {item.year && (
                          <p className="resume-item-period">{item.year}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="resume-empty">No certificates available.</p>
                )}
              </section>

              {/* PROFESSIONAL SKILLS */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <BriefcaseBusiness size={16} />
                  <h2>Professional Skills</h2>
                </div>

                {skills.length > 0 ? (
                  <div className="resume-skills-list">
                    {skills.map((item, index) => (
                      <div
                        key={item._id || `${item.name}-${item.level}-${index}`}
                        className="resume-skill-item"
                      >
                        {item.name && (
                          <p className="resume-item-title">{item.name}</p>
                        )}

                        {item.level && (
                          <p className="resume-item-accent">{item.level}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="resume-empty">
                    No professional skills available.
                  </p>
                )}
              </section>

              {/* LANGUAGES */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <Languages size={16} />
                  <h2>Languages</h2>
                </div>

                {languages.length > 0 ? (
                  <div className="resume-sidebar-list">
                    {languages.map((item, index) => (
                      <div
                        key={item._id || `${item.name}-${item.level}-${index}`}
                        className="resume-sidebar-item"
                      >
                        {item.name && (
                          <p className="resume-item-title">{item.name}</p>
                        )}

                        {item.level && (
                          <p className="resume-item-accent">{item.level}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="resume-empty">No languages available.</p>
                )}
              </section>
            </aside>
          </div>

          {/* FOOTER */}
          <footer className="resume-document-footer">
            {resume.title || "Professional Resume"}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const [resume, setResume] = useState<ResumeData | null>(null);

  const [loading, setLoading] = useState(true);

  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadResume = async () => {
      try {
        setLoading(true);

        const data = await getResume();

        if (mounted) {
          setResume(data);
        }
      } catch (error) {
        console.error("Failed to load resume:", error);

        if (mounted) {
          setResume(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadResume();

    return () => {
      mounted = false;
    };
  }, []);

  const hasResume = useMemo(() => {
    return Boolean(resume);
  }, [resume]);

  if (loading) {
    return <div className="resume-loading">Loading resume...</div>;
  }

  if (!hasResume || !resume) {
    return (
      <div className="resume-loading">Resume information is not available.</div>
    );
  }

  return (
    <>
      {/* =====================================================
          RESUME INTRO
      ===================================================== */}

      <section id="resume" className="resume-page">
        {/* Background atmosphere */}
        <div className="resume-background">
          <div className="resume-glow resume-glow-left" />
          <div className="resume-glow resume-glow-right" />
          {/* Removed background division line */}
        </div>

        <div className="resume-container">
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Heading - Left */}
            <div className="resume-intro">
              <p className="resume-eyebrow">Professional Profile</p>

              <h2>
                Explore my experience and <span>professional journey.</span>
              </h2>

              <p className="resume-introduction">
                Take a closer look at my experience, skills, education and
                professional background. My CV is dynamically managed through
                the backend admin dashboard, allowing the information to be
                updated centrally and viewed online or downloaded as a PDF.
              </p>
            </div>

            {/* Resume action - Right */}
            <div className="resume-action flex shrink-0 flex-col items-end gap-3">
              <div className="resume-scroll-hint flex items-center justify-end gap-2">
                <span>View & Download My CV below</span>
                <ArrowDown size={13} className="resume-arrow" />
              </div>

              <button
                type="button"
                onClick={() => setViewerOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_22px_rgba(52,211,153,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                <span>View Resume</span>

                <ArrowDown
                  size={15}
                  className="-rotate-90 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESUME VIEWER
      ===================================================== */}

      {viewerOpen && (
        <ResumeViewer resume={resume} onClose={() => setViewerOpen(false)} />
      )}
    </>
  );
}
