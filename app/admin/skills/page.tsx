"use client";

import { FormEvent, useEffect, useState } from "react";
import { Code2, Edit3, Loader2, Plus, Save, Trash2, X } from "lucide-react";

import api from "@/lib/api";

interface Skill {
  _id?: string;
  name: string;
  level: string;
  category?: string;
  icon?: string;
}

interface SkillForm {
  name: string;
  level: string;
  category: string;
  icon: string;
}

const emptyForm: SkillForm = {
  name: "",
  level: "",
  category: "",
  icon: "",
};

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [form, setForm] = useState<SkillForm>(emptyForm);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/skills?ts=${Date.now()}`);

      const data = response.data;

      const loadedSkills = Array.isArray(data)
        ? data
        : data?.skills || data?.data || [];

      setSkills(Array.isArray(loadedSkills) ? loadedSkills : []);
    } catch (error: any) {
      console.error("Error loading skills:", error);

      setError(error?.response?.data?.message || "Unable to load skills.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setEditingSkill(null);
    setForm(emptyForm);
    setMessage("");
    setError("");
    setShowForm(true);
  };

  const openEditForm = (skill: Skill) => {
    setEditingSkill(skill);

    setForm({
      name: skill.name || "",
      level: skill.level || "",
      category: skill.category || "",
      icon: skill.icon || "",
    });

    setMessage("");
    setError("");
    setShowForm(true);
  };

  const closeForm = () => {
    if (saving) return;

    setShowForm(false);
    setEditingSkill(null);
    setForm(emptyForm);
  };

  const saveSkill = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!form.name.trim()) {
      setError("Please enter a skill name.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: form.name.trim(),
        level: form.level.trim(),
        category: form.category.trim(),
        icon: form.icon.trim(),
      };

      if (editingSkill?._id) {
        await api.put(`/skills/${editingSkill._id}`, payload);

        setMessage("Skill updated successfully.");
      } else {
        await api.post("/skills", payload);

        setMessage("Skill added successfully.");
      }

      await loadSkills();

      setShowForm(false);
      setEditingSkill(null);
      setForm(emptyForm);
    } catch (error: any) {
      console.error("Error saving skill:", error);

      setError(error?.response?.data?.message || "Failed to save skill.");
    } finally {
      setSaving(false);
    }
  };

  const deleteSkill = async (skill: Skill) => {
    if (!skill._id) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${skill.name}"?`,
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      await api.delete(`/skills/${skill._id}`);

      setSkills((previous) =>
        previous.filter((item) => item._id !== skill._id),
      );

      setMessage("Skill deleted successfully.");
    } catch (error: any) {
      console.error("Error deleting skill:", error);

      setError(error?.response?.data?.message || "Failed to delete skill.");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-8">
        {/* Header */}
        <section className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Skills Management
            </div>

            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Skills
              </h1>

              {!loading && (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[var(--muted)]">
                  {skills.length}
                </span>
              )}
            </div>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Manage the professional skills displayed on your portfolio and
              resume.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddForm}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            <Plus size={17} />
            Add Skill
          </button>
        </section>

        {/* Notifications */}
        <div className="space-y-2.5">
          {message && (
            <div className="flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              <span>{message}</span>

              <button
                type="button"
                onClick={() => setMessage("")}
                className="text-emerald-300/70 transition hover:text-emerald-200"
                aria-label="Dismiss message"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-between rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              <span>{error}</span>

              <button
                type="button"
                onClick={() => setError("")}
                className="text-red-300/70 transition hover:text-red-200"
                aria-label="Dismiss error"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Skills */}
        <section className="mt-4">
          {loading ? (
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/[0.025]"
                >
                  <div className="flex items-start justify-between p-5">
                    <div className="h-10 w-10 rounded-xl bg-white/10" />

                    <div className="h-8 w-16 rounded-lg bg-white/5" />
                  </div>

                  <div className="px-5">
                    <div className="h-4 w-28 rounded bg-white/10" />

                    <div className="mt-3 h-3 w-20 rounded bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : skills.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                <Code2 size={22} className="text-emerald-300" />
              </div>

              <h2 className="mt-4 text-base font-semibold">No skills found</h2>

              <p className="mx-auto mt-1.5 max-w-sm text-sm leading-6 text-[var(--muted)]">
                Add your professional skills to display them on your portfolio
                and resume.
              </p>

              <button
                type="button"
                onClick={openAddForm}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
              >
                <Plus size={17} />
                Add Your First Skill
              </button>
            </div>
          ) : (
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <article
                  key={skill._id || `${skill.name}-${skill.category}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                      <Code2 size={19} className="text-emerald-300" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEditForm(skill)}
                        className="rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-300"
                        aria-label={`Edit ${skill.name}`}
                      >
                        <Edit3 size={15} />
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteSkill(skill)}
                        className="rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-red-400/30 hover:bg-red-400/5 hover:text-red-300"
                        aria-label={`Delete ${skill.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Skill Information */}
                  <div className="mt-5">
                    <h2 className="truncate text-base font-semibold">
                      {skill.name}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {skill.category && (
                        <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                          {skill.category}
                        </span>
                      )}

                      {skill.level && (
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[var(--muted)]">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  {skill.icon && (
                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="truncate text-xs text-[var(--muted)]">
                        <span className="text-white/50">Icon:</span>{" "}
                        {skill.icon}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Add / Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#07111f] shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 px-5 py-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10">
                    <Code2 size={18} className="text-emerald-300" />
                  </div>

                  <div>
                    <h2 className="text-base font-semibold">
                      {editingSkill ? "Edit Skill" : "Add Skill"}
                    </h2>

                    <p className="mt-0.5 text-xs text-[var(--muted)]">
                      {editingSkill
                        ? "Update your professional skill."
                        : "Add a new professional skill."}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={closeForm}
                disabled={saving}
                className="rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close form"
              >
                <X size={17} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={saveSkill} className="space-y-4 p-5">
              <FormInput
                label="Skill Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. JavaScript"
                required
              />

              <FormInput
                label="Level"
                name="level"
                value={form.level}
                onChange={handleChange}
                placeholder="e.g. Advanced"
              />

              <FormInput
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="e.g. Frontend"
              />

              <FormInput
                label="Icon"
                name="icon"
                value={form.icon}
                onChange={handleChange}
                placeholder="e.g. javascript"
              />

              {/* Actions */}
              <div className="flex justify-end gap-2.5 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={closeForm}
                  disabled={saving}
                  className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      {editingSkill ? "Update Skill" : "Save Skill"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Form Input                                                                  */
/* -------------------------------------------------------------------------- */

function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-[var(--muted)]"
      >
        {label}
        {required && <span className="ml-1 text-emerald-300">*</span>}
      </label>

      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none transition placeholder:text-white/25 focus:border-emerald-400/40 focus:bg-white/[0.04]"
      />
    </div>
  );
}
