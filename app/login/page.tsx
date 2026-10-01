"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, LockKeyhole, Mail, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import api from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email address and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email: email.trim(),
        password,
      });

      const data = response.data;

      if (!data.success || !data.token) {
        setError(data.message || "Unable to sign in.");
        return;
      }

      // Only allow administrator accounts
      if (data.user?.role !== "admin") {
        setError("Admin access is required.");
        return;
      }

      // Store authentication details
      localStorage.setItem("token", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.user));

      // Redirect to admin dashboard
      router.push("/admin");
    } catch (error: any) {
      console.error("Login failed:", error);

      const message =
        error?.response?.data?.message ||
        "Unable to sign in. Please check your email and password.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center px-6 py-10">
        <div className="w-full">
          {/* BACK TO PORTFOLIO */}
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-cyan-400"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>

          {/* LOGIN CARD */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl backdrop-blur-xl">
            {/* HEADER */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <LockKeyhole size={20} />
              </div>

              <h1 className="text-2xl font-light tracking-tight">
                Welcome Back
              </h1>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Sign in to access the admin area.
              </p>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mb-4 rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2.5 text-sm text-red-300">
                {error}
              </div>
            )}

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-[var(--muted)]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    disabled={loading}
                    className="w-full rounded-lg border border-[var(--border)] bg-black/10 py-2.5 pl-9 pr-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400/50 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-xs font-medium text-[var(--muted)]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    disabled={loading}
                    className="w-full rounded-lg border border-[var(--border)] bg-black/10 py-2.5 pl-9 pr-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400/50 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* SIGN IN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.08)] transition duration-300 hover:border-emerald-400 hover:bg-emerald-400 hover:shadow-[0_0_28px_rgba(52,211,153,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* FOOTER */}
            <p className="mt-5 text-center text-xs text-[var(--muted)]">
              Admin access only.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
