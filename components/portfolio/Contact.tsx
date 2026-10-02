"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import api from "@/lib/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    try {
      await api.post("/messages", form);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to send message:", err);

      setError(
        "Unable to send your message right now. Please try again or contact me directly by email.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-b border-[var(--border-soft)] bg-[var(--background)] py-6 sm:py-8"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-48 w-48 rounded-full bg-cyan-400/[0.025] blur-3xl" />

        <div className="absolute bottom-[5%] right-[5%] h-56 w-56 rounded-full bg-blue-400/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}

        <div className="mb-5 max-w-3xl">
          <div className="mb-2 flex items-center gap-2.5">
            <span className="h-px w-7 bg-cyan-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300">
              Contact
            </span>
          </div>

          <h2 className="text-3xl font-light leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
            Let&apos;s Build Something{" "}
            <span className="text-cyan-300">Useful.</span>
          </h2>

          <p className="mt-2 max-w-2xl text-[15px] leading-5 text-[var(--muted)]">
            Have a project, idea or opportunity you would like to discuss? Send
            me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Main Contact Layout */}

        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 md:p-5">
            <div className="mb-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                Get In Touch
              </p>

              <h3 className="mt-2 text-xl font-light leading-tight text-[var(--foreground)]">
                Let&apos;s connect.
              </h3>

              <p className="mt-2 text-sm leading-5 text-[var(--muted)]">
                I&apos;m open to discussing software development projects,
                freelance opportunities, collaborations and interesting
                technical challenges.
              </p>
            </div>

            {/* Email */}

            <a
              href="mailto:info@iaminno.co.za"
              className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-3 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.03]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                <Mail size={17} strokeWidth={1.5} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  Email
                </p>

                <p className="mt-0.5 truncate text-sm text-[var(--muted)] group-hover:text-cyan-300">
                  info@iaminno.co.za
                </p>
              </div>

              <ArrowUpRight
                size={16}
                className="text-[var(--muted-soft)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-300"
              />
            </a>

            {/* Location */}

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-300">
                <MapPin size={17} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  Location
                </p>

                <p className="mt-0.5 text-sm text-[var(--muted)]">
                  South Africa
                </p>
              </div>
            </div>

            {/* Social Links */}

            <div className="mt-4">
              <p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                Find Me Online
              </p>

              <div className="flex gap-2">
                <a
                  href="https://github.com/Jambinno-Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/innocent-jambaya-93a64b189/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="mailto:info@iaminno.co.za"
                  aria-label="Email"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 md:p-5">
            <div className="mb-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                Send A Message
              </p>

              <h3 className="mt-2 text-xl font-light leading-tight text-[var(--foreground)]">
                Start a conversation.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name + Email */}

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-soft)] transition-all duration-300 focus:border-cyan-300/30 focus:bg-cyan-300/[0.02]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-soft)] transition-all duration-300 focus:border-cyan-300/30 focus:bg-cyan-300/[0.02]"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project or opportunity"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-soft)] transition-all duration-300 focus:border-cyan-300/30 focus:bg-cyan-300/[0.02]"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project or idea..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm leading-5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted-soft)] transition-all duration-300 focus:border-cyan-300/30 focus:bg-cyan-300/[0.02]"
                />
              </div>

              {/* Success */}

              {success && (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] px-3.5 py-2.5">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-300"
                  />

                  <p className="text-sm leading-5 text-emerald-200">
                    Your message has been sent successfully.
                  </p>
                </div>
              )}

              {/* Error */}

              {error && (
                <div className="rounded-xl border border-red-300/15 bg-red-300/[0.04] px-3.5 py-2.5">
                  <p className="text-sm leading-5 text-red-200">{error}</p>
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-medium text-[#020812] transition-all duration-300 hover:bg-cyan-200 hover:shadow-[0_10px_35px_rgba(103,232,249,0.15)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={16} />

                {sending ? "Sending Message..." : "Send Message"}

                {!sending && <ArrowUpRight size={15} />}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Statement */}

        <div className="mt-5 text-center">
          <p className="text-[10px] leading-5 text-[var(--muted-soft)]">
            Software Developer • Web Development • Backend • Databases
          </p>
        </div>
      </div>
    </section>
  );
}
