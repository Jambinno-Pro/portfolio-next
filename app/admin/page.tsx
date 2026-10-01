"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  RefreshCw,
  UserRound,
  Wrench,
} from "lucide-react";

import api from "@/lib/api";

interface ResumeData {
  _id?: string;
  fullName?: string;
  title?: string;
  bio?: string;
  email?: string;
}

interface Skill {
  _id?: string;
  name?: string;
  level?: number | string;
  category?: string;
}

interface Message {
  _id?: string;
  id?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  status?: string;
  createdAt?: string;
}

export default function AdminDashboard() {
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadDashboard = async () => {
    try {
      setRefreshing(true);

      const [resumeResponse, skillsResponse, messagesResponse] =
        await Promise.all([
          api.get(`/resume?ts=${Date.now()}`),
          api.get(`/skills?ts=${Date.now()}`),
          api.get(`/messages?ts=${Date.now()}`),
        ]);

      const resumeData =
        resumeResponse.data?.resume || resumeResponse.data?.data || null;

      const skillsData =
        skillsResponse.data?.skills || skillsResponse.data?.data || [];

      const messagesData =
        messagesResponse.data?.messages || messagesResponse.data?.data || [];

      setResume(resumeData);
      setSkills(Array.isArray(skillsData) ? skillsData : []);
      setMessages(Array.isArray(messagesData) ? messagesData : []);
    } catch (error) {
      console.error("Dashboard loading error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    loadDashboard();
  }, []);

  const unreadMessages = messages.filter(
    (message) => String(message.status || "").toLowerCase() === "new",
  ).length;

  const recentMessages = messages.slice(0, 4);

  const stats = [
    {
      title: "Resume",
      value: resume ? "Active" : "Empty",
      description: resume
        ? "Your resume is connected"
        : "Resume content is missing",
      icon: FileText,
      href: "/admin/resume",
      iconClass: "text-emerald-300",
      iconBg: "bg-emerald-400/10",
    },
    {
      title: "Skills",
      value: skills.length,
      description:
        skills.length === 1 ? "Professional skill" : "Professional skills",
      icon: Wrench,
      href: "/admin/skills",
      iconClass: "text-cyan-300",
      iconBg: "bg-cyan-400/10",
    },
    {
      title: "Messages",
      value: messages.length,
      description:
        unreadMessages > 0
          ? `${unreadMessages} unread message${unreadMessages === 1 ? "" : "s"}`
          : "All messages reviewed",
      icon: Mail,
      href: "/admin/messages",
      iconClass: "text-violet-300",
      iconBg: "bg-violet-400/10",
    },
  ];

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--background)] px-5 py-8 text-[var(--foreground)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse space-y-6">
            <div className="h-8 w-56 rounded-lg bg-white/10" />

            <div className="h-4 w-80 rounded bg-white/5" />

            <div className="grid gap-2.5 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-40 rounded-2xl border border-white/10 bg-white/[0.03]"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-8">
        {/* Header */}
        <section className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Admin Dashboard
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome back, Innocent
            </h1>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Manage your resume, professional skills and messages from one
              place.
            </p>
          </div>

          <button
            type="button"
            onClick={loadDashboard}
            disabled={refreshing}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
            Refresh
          </button>
        </section>

        {/* Stats */}
        <section className="grid gap-2.5 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Link
                key={stat.title}
                href={stat.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
                  >
                    <Icon size={21} className={stat.iconClass} />
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm text-[var(--muted)]">{stat.title}</p>

                  <p className="mt-1 text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </p>

                  <p className="mt-1.5 text-xs text-[var(--muted)]">
                    {stat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>

        {/* Main Grid */}
        <section className="mt-4 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
          {/* Recent Messages */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h2 className="text-base font-semibold">Recent Messages</h2>

                <p className="mt-0.5 text-xs text-[var(--muted)]">
                  Latest messages from your portfolio
                </p>
              </div>

              <Link
                href="/admin/messages"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 transition hover:text-emerald-200"
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>

            {recentMessages.length === 0 ? (
              <div className="flex min-h-48 flex-col items-center justify-center px-5 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04]">
                  <Mail size={19} className="text-[var(--muted)]" />
                </div>

                <p className="mt-3 text-sm font-medium">No messages yet</p>

                <p className="mt-1 max-w-xs text-xs leading-5 text-[var(--muted)]">
                  Messages submitted through your portfolio contact form will
                  appear here.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {recentMessages.map((message) => {
                  const isNew =
                    String(message.status || "").toLowerCase() === "new";

                  return (
                    <Link
                      key={message._id || message.id}
                      href="/admin/messages"
                      className="group flex items-center gap-3 px-5 py-3.5 transition hover:bg-white/[0.025]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-sm font-semibold">
                        {message.name?.charAt(0).toUpperCase() || "?"}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium">
                            {message.name || "Unknown"}
                          </p>

                          {isNew && (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          )}
                        </div>

                        <p className="mt-0.5 truncate text-xs text-[var(--muted)]">
                          {message.subject || "No subject"}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        className="shrink-0 text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-white"
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Access */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025]">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-base font-semibold">Quick Access</h2>

              <p className="mt-0.5 text-xs text-[var(--muted)]">
                Manage your portfolio content
              </p>
            </div>

            <div className="space-y-2 p-3">
              <QuickAccess
                href="/admin/resume"
                icon={FileText}
                title="Edit Resume"
                description="Update your professional profile"
              />

              <QuickAccess
                href="/admin/skills"
                icon={Wrench}
                title="Manage Skills"
                description="Add or update your technical skills"
              />

              <QuickAccess
                href="/admin/messages"
                icon={Mail}
                title="View Messages"
                description="Read messages from visitors"
              />
            </div>
          </div>
        </section>

        {/* Profile Status */}
        <section className="mt-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10">
                <UserRound size={20} className="text-emerald-300" />
              </div>

              <div>
                <p className="text-sm font-semibold">Portfolio Profile</p>

                <p className="mt-0.5 text-xs text-[var(--muted)]">
                  {resume?.fullName || "Innocent Jambaya"}
                  {resume?.title ? ` · ${resume.title}` : ""}
                </p>
              </div>
            </div>

            <Link
              href="/admin/resume"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-300"
            >
              Edit Profile
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function QuickAccess({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
        <Icon size={17} className="text-emerald-300" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-0.5 truncate text-xs text-[var(--muted)]">
          {description}
        </p>
      </div>

      <ArrowRight
        size={15}
        className="text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-white"
      />
    </Link>
  );
}
