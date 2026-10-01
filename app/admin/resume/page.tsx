"use client";

import { useEffect, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Languages,
  Plus,
  Save,
  Trash2,
  UserRound,
  Wrench,
} from "lucide-react";

import api from "@/lib/api";

interface ResumeSkill {
  _id?: string;
  name: string;
  level: string;
}

interface ResumeExperience {
  _id?: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

interface ResumeEducation {
  _id?: string;
  school: string;
  qualification: string;
  period: string;
}

interface ResumeCertificate {
  _id?: string;
  name: string;
  issuer: string;
  year: string;
}

interface ResumeLanguage {
  _id?: string;
  name: string;
  level: string;
}

interface ResumeData {
  _id?: string;

  fullName: string;
  title: string;
  bio: string;

  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;

  skills: ResumeSkill[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  certificates: ResumeCertificate[];
  languages: ResumeLanguage[];
}

const emptyResume: ResumeData = {
  fullName: "",
  title: "",
  bio: "",

  email: "",
  phone: "",
  location: "",
  website: "",
  github: "",
  linkedin: "",

  skills: [],
  experience: [],
  education: [],
  certificates: [],
  languages: [],
};

export default function ResumeAdminPage() {
  const [resume, setResume] = useState<ResumeData>(emptyResume);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const loadResume = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/resume?ts=${Date.now()}`);

      const data = response.data?.resume || response.data?.data || null;

      if (data) {
        setResume({
          ...emptyResume,
          ...data,
          skills: Array.isArray(data.skills) ? data.skills : [],
          experience: Array.isArray(data.experience) ? data.experience : [],
          education: Array.isArray(data.education) ? data.education : [],
          certificates: Array.isArray(data.certificates)
            ? data.certificates
            : [],
          languages: Array.isArray(data.languages) ? data.languages : [],
        });
      }
    } catch (err) {
      console.error("Load resume error:", err);
      setError("Unable to load your resume.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    loadResume();
  }, []);

  const updateField = (field: keyof ResumeData, value: string) => {
    setResume((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateSkill = (
    index: number,
    field: keyof ResumeSkill,
    value: string,
  ) => {
    setResume((current) => {
      const skills = [...current.skills];

      skills[index] = {
        ...skills[index],
        [field]: value,
      };

      return {
        ...current,
        skills,
      };
    });
  };

  const addSkill = () => {
    setResume((current) => ({
      ...current,
      skills: [
        ...current.skills,
        {
          name: "",
          level: "",
        },
      ],
    }));
  };

  const removeSkill = (index: number) => {
    setResume((current) => ({
      ...current,
      skills: current.skills.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const updateExperience = (
    index: number,
    field: keyof ResumeExperience,
    value: string,
  ) => {
    setResume((current) => {
      const experience = [...current.experience];

      experience[index] = {
        ...experience[index],
        [field]: value,
      };

      return {
        ...current,
        experience,
      };
    });
  };

  const addExperience = () => {
    setResume((current) => ({
      ...current,
      experience: [
        ...current.experience,
        {
          company: "",
          position: "",
          period: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  };

  const updateEducation = (
    index: number,
    field: keyof ResumeEducation,
    value: string,
  ) => {
    setResume((current) => {
      const education = [...current.education];

      education[index] = {
        ...education[index],
        [field]: value,
      };

      return {
        ...current,
        education,
      };
    });
  };

  const addEducation = () => {
    setResume((current) => ({
      ...current,
      education: [
        ...current.education,
        {
          school: "",
          qualification: "",
          period: "",
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setResume((current) => ({
      ...current,
      education: current.education.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  };

  const updateCertificate = (
    index: number,
    field: keyof ResumeCertificate,
    value: string,
  ) => {
    setResume((current) => {
      const certificates = [...current.certificates];

      certificates[index] = {
        ...certificates[index],
        [field]: value,
      };

      return {
        ...current,
        certificates,
      };
    });
  };

  const addCertificate = () => {
    setResume((current) => ({
      ...current,
      certificates: [
        ...current.certificates,
        {
          name: "",
          issuer: "",
          year: "",
        },
      ],
    }));
  };

  const removeCertificate = (index: number) => {
    setResume((current) => ({
      ...current,
      certificates: current.certificates.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  };

  const updateLanguage = (
    index: number,
    field: keyof ResumeLanguage,
    value: string,
  ) => {
    setResume((current) => {
      const languages = [...current.languages];

      languages[index] = {
        ...languages[index],
        [field]: value,
      };

      return {
        ...current,
        languages,
      };
    });
  };

  const addLanguage = () => {
    setResume((current) => ({
      ...current,
      languages: [
        ...current.languages,
        {
          name: "",
          level: "",
        },
      ],
    }));
  };

  const removeLanguage = (index: number) => {
    setResume((current) => ({
      ...current,
      languages: current.languages.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  };

  const saveResume = async () => {
    try {
      setSaving(true);
      setSuccess("");
      setError("");

      const response = await api.post("/resume", resume);

      const savedResume =
        response.data?.resume || response.data?.data || response.data;

      if (savedResume && typeof savedResume === "object") {
        setResume((current) => ({
          ...current,
          ...savedResume,
        }));
      }

      setSuccess("Resume updated successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 4000);
    } catch (err) {
      console.error("Save resume error:", err);
      setError("Unable to save your resume.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--background)] px-5 py-8 text-[var(--foreground)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl animate-pulse space-y-5">
          <div className="h-8 w-48 rounded-lg bg-white/10" />
          <div className="h-4 w-80 rounded bg-white/5" />

          <div className="h-72 rounded-2xl border border-white/10 bg-white/[0.03]" />

          <div className="h-72 rounded-2xl border border-white/10 bg-white/[0.03]" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8 lg:px-10 lg:py-8">
        {/* Header */}
        <header className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Resume Management
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Resume
            </h1>

            <p className="mt-1.5 text-sm text-[var(--muted)] sm:text-base">
              Manage the professional information displayed on your portfolio.
            </p>
          </div>

          <button
            type="button"
            onClick={saveResume}
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={17} />

            {saving ? "Saving..." : "Save Changes"}
          </button>
        </header>

        {/* Notifications */}
        {success && (
          <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
            <CheckCircle2 size={18} />
            {success}
          </div>
        )}

        {error && (
          <div className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Personal Information */}
          <SectionCard
            icon={UserRound}
            title="Personal Information"
            description="Your main professional identity and contact details."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Full Name"
                value={resume.fullName}
                onChange={(value) => updateField("fullName", value)}
                placeholder="Innocent Jambaya"
              />

              <Input
                label="Professional Title"
                value={resume.title}
                onChange={(value) => updateField("title", value)}
                placeholder="Software Developer"
              />

              <Input
                label="Email"
                type="email"
                value={resume.email}
                onChange={(value) => updateField("email", value)}
                placeholder="your@email.com"
              />

              <Input
                label="Phone"
                value={resume.phone}
                onChange={(value) => updateField("phone", value)}
                placeholder="+27 ..."
              />

              <Input
                label="Location"
                value={resume.location}
                onChange={(value) => updateField("location", value)}
                placeholder="Cape Town, South Africa"
              />

              <Input
                label="Website"
                value={resume.website}
                onChange={(value) => updateField("website", value)}
                placeholder="https://..."
              />

              <Input
                label="GitHub"
                value={resume.github}
                onChange={(value) => updateField("github", value)}
                placeholder="https://github.com/..."
              />

              <Input
                label="LinkedIn"
                value={resume.linkedin}
                onChange={(value) => updateField("linkedin", value)}
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div className="mt-4">
              <TextArea
                label="Professional Summary"
                value={resume.bio}
                onChange={(value) => updateField("bio", value)}
                placeholder="Write a short professional summary..."
                rows={5}
              />
            </div>
          </SectionCard>

          {/* Skills */}
          <SectionCard
            icon={Wrench}
            title="Professional Skills"
            description="Skills displayed in your resume."
            action={<AddButton onClick={addSkill} label="Add Skill" />}
          >
            <div className="space-y-2">
              {resume.skills.length === 0 ? (
                <EmptyState text="No skills added yet." />
              ) : (
                resume.skills.map((skill, index) => (
                  <div
                    key={skill._id || index}
                    className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 md:grid-cols-[1fr_180px_auto]"
                  >
                    <Input
                      label="Skill"
                      value={skill.name}
                      onChange={(value) => updateSkill(index, "name", value)}
                      placeholder="Node.js"
                    />

                    <Input
                      label="Level"
                      value={skill.level}
                      onChange={(value) => updateSkill(index, "level", value)}
                      placeholder="Advanced"
                    />

                    <RemoveButton onClick={() => removeSkill(index)} />
                  </div>
                ))
              )}
            </div>
          </SectionCard>

          {/* Experience */}
          <SectionCard
            icon={BriefcaseBusiness}
            title="Work Experience"
            description="Your professional experience and career history."
            action={
              <AddButton onClick={addExperience} label="Add Experience" />
            }
          >
            <div className="space-y-3">
              {resume.experience.length === 0 ? (
                <EmptyState text="No experience added yet." />
              ) : (
                resume.experience.map((experience, index) => (
                  <div
                    key={experience._id || index}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Experience {index + 1}
                      </p>

                      <RemoveButton onClick={() => removeExperience(index)} />
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <Input
                        label="Position"
                        value={experience.position}
                        onChange={(value) =>
                          updateExperience(index, "position", value)
                        }
                        placeholder="Software Developer"
                      />

                      <Input
                        label="Company"
                        value={experience.company}
                        onChange={(value) =>
                          updateExperience(index, "company", value)
                        }
                        placeholder="Company name"
                      />

                      <Input
                        label="Period"
                        value={experience.period}
                        onChange={(value) =>
                          updateExperience(index, "period", value)
                        }
                        placeholder="2021 - Present"
                      />
                    </div>

                    <div className="mt-3">
                      <TextArea
                        label="Description"
                        value={experience.description}
                        onChange={(value) =>
                          updateExperience(index, "description", value)
                        }
                        placeholder="Describe your responsibilities and achievements..."
                        rows={4}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </SectionCard>

          {/* Education */}
          <SectionCard
            icon={GraduationCap}
            title="Education"
            description="Your academic background and qualifications."
            action={<AddButton onClick={addEducation} label="Add Education" />}
          >
            <div className="space-y-3">
              {resume.education.length === 0 ? (
                <EmptyState text="No education added yet." />
              ) : (
                resume.education.map((education, index) => (
                  <div
                    key={education._id || index}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Education {index + 1}
                      </p>

                      <RemoveButton onClick={() => removeEducation(index)} />
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <Input
                        label="Qualification"
                        value={education.qualification}
                        onChange={(value) =>
                          updateEducation(index, "qualification", value)
                        }
                        placeholder="Diploma in IT"
                      />

                      <Input
                        label="School"
                        value={education.school}
                        onChange={(value) =>
                          updateEducation(index, "school", value)
                        }
                        placeholder="University / Institution"
                      />

                      <Input
                        label="Period"
                        value={education.period}
                        onChange={(value) =>
                          updateEducation(index, "period", value)
                        }
                        placeholder="2025 - Present"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </SectionCard>

          {/* Certifications */}
          <SectionCard
            icon={Award}
            title="Certifications"
            description="Professional certifications and training."
            action={
              <AddButton onClick={addCertificate} label="Add Certificate" />
            }
          >
            <div className="space-y-3">
              {resume.certificates.length === 0 ? (
                <EmptyState text="No certifications added yet." />
              ) : (
                resume.certificates.map((certificate, index) => (
                  <div
                    key={certificate._id || index}
                    className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 md:grid-cols-[1fr_1fr_130px_auto]"
                  >
                    <Input
                      label="Certificate"
                      value={certificate.name}
                      onChange={(value) =>
                        updateCertificate(index, "name", value)
                      }
                      placeholder="Full-Stack Development"
                    />

                    <Input
                      label="Issuer"
                      value={certificate.issuer}
                      onChange={(value) =>
                        updateCertificate(index, "issuer", value)
                      }
                      placeholder="Udemy"
                    />

                    <Input
                      label="Year"
                      value={certificate.year}
                      onChange={(value) =>
                        updateCertificate(index, "year", value)
                      }
                      placeholder="2025"
                    />

                    <RemoveButton onClick={() => removeCertificate(index)} />
                  </div>
                ))
              )}
            </div>
          </SectionCard>

          {/* Languages */}
          <SectionCard
            icon={Languages}
            title="Languages"
            description="Languages displayed on your resume."
            action={<AddButton onClick={addLanguage} label="Add Language" />}
          >
            <div className="space-y-2">
              {resume.languages.length === 0 ? (
                <EmptyState text="No languages added yet." />
              ) : (
                resume.languages.map((language, index) => (
                  <div
                    key={language._id || index}
                    className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 md:grid-cols-[1fr_1fr_auto]"
                  >
                    <Input
                      label="Language"
                      value={language.name}
                      onChange={(value) => updateLanguage(index, "name", value)}
                      placeholder="English"
                    />

                    <Input
                      label="Level"
                      value={language.level}
                      onChange={(value) =>
                        updateLanguage(index, "level", value)
                      }
                      placeholder="Fluent"
                    />

                    <RemoveButton onClick={() => removeLanguage(index)} />
                  </div>
                ))
              )}
            </div>
          </SectionCard>
        </div>

        {/* Bottom Save */}
        <div className="mt-5 flex justify-end border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={saveResume}
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#07111f] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={17} />

            {saving ? "Saving..." : "Save Resume"}
          </button>
        </div>
      </div>
    </main>
  );
}

function SectionCard({
  icon: Icon,
  title,
  description,
  action,
  children,
}: {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  title: string;
  description: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.025]">
      <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
            <Icon size={17} className="text-emerald-300" />
          </div>

          <div>
            <h2 className="text-sm font-semibold">{title}</h2>

            <p className="mt-0.5 text-xs text-[var(--muted)]">{description}</p>
          </div>
        </div>

        {action}
      </div>

      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-xl border border-white/10 bg-[#07111f]/60 px-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-white/20 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y rounded-xl border border-white/10 bg-[#07111f]/60 px-3 py-2.5 text-sm leading-6 text-[var(--foreground)] outline-none transition placeholder:text-white/20 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
      />
    </label>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs font-medium text-emerald-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/10"
    >
      <Plus size={14} />
      {label}
    </button>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-400/10 text-red-300/70 transition hover:border-red-400/20 hover:bg-red-400/10 hover:text-red-300"
      aria-label="Remove"
    >
      <Trash2 size={16} />
    </button>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/10 px-4 py-7 text-center text-xs text-[var(--muted)]">
      {text}
    </div>
  );
}
