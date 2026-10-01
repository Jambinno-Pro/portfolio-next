"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Eye,
  Loader2,
  Mail,
  MailOpen,
  RefreshCw,
  Trash2,
  X,
} from "lucide-react";

import api from "@/lib/api";

interface Message {
  _id?: string;
  id?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  const getMessageId = (message: Message) => {
    return message._id || message.id || "";
  };

  const loadMessages = async () => {
    try {
      setError("");

      const response = await api.get(`/messages?ts=${Date.now()}`);

      const data = response.data;

      const loadedMessages: Message[] = Array.isArray(data)
        ? data
        : Array.isArray(data?.messages)
          ? data.messages
          : Array.isArray(data?.data)
            ? data.data
            : [];

      setMessages(loadedMessages);
    } catch (error: any) {
      console.error("Error loading messages:", error);

      setError(error?.response?.data?.message || "Unable to load messages.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const refreshMessages = async () => {
    setRefreshing(true);
    await loadMessages();
  };

  const markAsRead = async (message: Message) => {
    const id = getMessageId(message);

    if (!id) {
      console.error(
        "Cannot mark message as read: missing message ID.",
        message,
      );

      setError("This message does not have a valid ID.");
      return;
    }

    try {
      setError("");
      setNotice("");

      await api.put(`/messages/${id}/status`, {
        status: "Read",
      });

      setMessages((previous) =>
        previous.map((item) => {
          const itemId = getMessageId(item);

          if (itemId === id) {
            return {
              ...item,
              status: "Read",
            };
          }

          return item;
        }),
      );

      setSelectedMessage((previous) => {
        if (!previous) return previous;

        if (getMessageId(previous) !== id) {
          return previous;
        }

        return {
          ...previous,
          status: "Read",
        };
      });

      setNotice("Message marked as read.");
    } catch (error: any) {
      console.error("Error marking message as read:", error);

      setError(
        error?.response?.data?.message || "Failed to mark the message as read.",
      );
    }
  };

  const deleteMessage = async (message: Message) => {
    const id = getMessageId(message);

    if (!id) {
      setError("This message does not have a valid ID.");
      return;
    }

    const confirmed = window.confirm(
      `Delete the message from ${message.name || "this visitor"}?`,
    );

    if (!confirmed) return;

    try {
      setError("");
      setNotice("");

      await api.delete(`/messages/${id}`);

      setMessages((previous) =>
        previous.filter((item) => getMessageId(item) !== id),
      );

      setSelectedMessage((previous) => {
        if (!previous) return previous;

        return getMessageId(previous) === id ? null : previous;
      });

      setNotice("Message deleted successfully.");
    } catch (error: any) {
      console.error("Error deleting message:", error);

      setError(error?.response?.data?.message || "Failed to delete message.");
    }
  };

  const openMessage = (message: Message) => {
    setSelectedMessage(message);

    const status = String(message.status || "").toLowerCase();

    if (status !== "read") {
      void markAsRead(message);
    }
  };

  const formatDate = (date?: string) => {
    if (!date) return "Unknown date";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Unknown date";
    }

    return parsedDate.toLocaleString();
  };

  const unreadCount = messages.filter(
    (message) => String(message.status || "").toLowerCase() !== "read",
  ).length;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-8">
        {/* Header */}
        <section className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Portfolio Inbox
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Messages
              </h1>

              {!loading && (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[var(--muted)]">
                  {messages.length}
                </span>
              )}

              {!loading && unreadCount > 0 && (
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  {unreadCount} unread
                </span>
              )}
            </div>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Manage messages submitted through your portfolio contact form.
            </p>
          </div>

          <button
            type="button"
            onClick={refreshMessages}
            disabled={refreshing}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
            Refresh
          </button>
        </section>

        {/* Notifications */}
        <div className="space-y-2.5">
          {notice && (
            <div className="flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              <span>{notice}</span>

              <button
                type="button"
                onClick={() => setNotice("")}
                className="ml-4 transition hover:text-emerald-200"
                aria-label="Dismiss notification"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-between gap-4 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              <span>{error}</span>

              <button
                type="button"
                onClick={() => setError("")}
                className="shrink-0 transition hover:text-red-200"
                aria-label="Dismiss error"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <section className="mt-4">
          {loading ? (
            <div className="grid gap-2.5">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-20 animate-pulse rounded-2xl border border-white/10 bg-white/[0.025]"
                >
                  <div className="flex h-full items-center gap-4 px-5">
                    <div className="h-10 w-10 rounded-full bg-white/10" />

                    <div className="flex-1">
                      <div className="h-3.5 w-32 rounded bg-white/10" />

                      <div className="mt-2 h-3 w-48 rounded bg-white/5" />
                    </div>

                    <div className="hidden h-7 w-16 rounded-full bg-white/5 sm:block" />
                  </div>
                </div>
              ))}
            </div>
          ) : messages.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                <MailOpen size={22} className="text-emerald-300" />
              </div>

              <h2 className="mt-4 text-base font-semibold">No messages yet</h2>

              <p className="mx-auto mt-1.5 max-w-sm text-sm leading-6 text-[var(--muted)]">
                Messages submitted through your portfolio contact form will
                appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
              {/* Table Header */}
              <div className="hidden border-b border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] md:grid md:grid-cols-[1.25fr_1.5fr_2fr_0.7fr_auto] md:items-center md:gap-4">
                <span>Sender</span>
                <span>Email</span>
                <span>Subject</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {/* Messages */}
              <div className="divide-y divide-white/10">
                {messages.map((message, index) => {
                  const id = getMessageId(message);

                  const isRead =
                    String(message.status || "").toLowerCase() === "read";

                  const rowKey = id || `${message.email || "message"}-${index}`;

                  return (
                    <div
                      key={rowKey}
                      className={`px-5 py-4 transition hover:bg-white/[0.03] ${
                        !isRead ? "bg-emerald-400/[0.02]" : ""
                      }`}
                    >
                      <div className="grid gap-3 md:grid-cols-[1.25fr_1.5fr_2fr_0.7fr_auto] md:items-center md:gap-4">
                        {/* Sender */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-xs font-semibold">
                              {message.name?.charAt(0).toUpperCase() || "?"}
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                {!isRead && (
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                )}

                                <p
                                  className={`truncate text-sm ${
                                    !isRead ? "font-semibold" : "font-medium"
                                  }`}
                                >
                                  {message.name || "Visitor"}
                                </p>
                              </div>

                              <p className="mt-0.5 text-[11px] text-[var(--muted)]">
                                {formatDate(message.createdAt)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="min-w-0">
                          <p className="truncate text-sm text-[var(--muted)]">
                            {message.email || "No email"}
                          </p>
                        </div>

                        {/* Subject */}
                        <div className="min-w-0">
                          <p
                            className={`truncate text-sm ${
                              !isRead ? "font-medium" : ""
                            }`}
                          >
                            {message.subject || "No subject"}
                          </p>
                        </div>

                        {/* Status */}
                        <div>
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${
                              isRead
                                ? "border border-white/10 bg-white/[0.04] text-[var(--muted)]"
                                : "bg-emerald-400/10 text-emerald-300"
                            }`}
                          >
                            {isRead ? "Read" : "New"}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openMessage(message)}
                            className="rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-300"
                            aria-label="View message"
                            title="View message"
                          >
                            <Eye size={15} />
                          </button>

                          {!isRead && (
                            <button
                              type="button"
                              onClick={() => markAsRead(message)}
                              className="rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-emerald-300"
                              aria-label="Mark as read"
                              title="Mark as read"
                            >
                              <Check size={15} />
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => deleteMessage(message)}
                            className="rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-red-400/30 hover:bg-red-400/5 hover:text-red-300"
                            aria-label="Delete message"
                            title="Delete message"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMessage(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#07111f] shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 px-5 py-4">
              <div className="min-w-0 pr-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                  <Mail size={15} />
                  Message
                </div>

                <h2 className="break-words text-lg font-semibold">
                  {selectedMessage.subject || "No subject"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="shrink-0 rounded-lg border border-white/10 p-2 text-[var(--muted)] transition hover:border-white/20 hover:text-white"
                aria-label="Close message"
              >
                <X size={17} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5 p-5">
              {/* Sender Information */}
              <div className="grid gap-4 sm:grid-cols-2">
                <MessageDetail
                  label="Name"
                  value={selectedMessage.name || "Visitor"}
                />

                <MessageDetail
                  label="Email"
                  value={selectedMessage.email || "No email"}
                  breakWords
                />

                <MessageDetail
                  label="Date"
                  value={formatDate(selectedMessage.createdAt)}
                />

                <div>
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    Status
                  </p>

                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      String(selectedMessage.status || "").toLowerCase() ===
                      "read"
                        ? "border border-white/10 bg-white/[0.04] text-[var(--muted)]"
                        : "bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    {String(selectedMessage.status || "").toLowerCase() ===
                    "read"
                      ? "Read"
                      : "New"}
                  </span>
                </div>
              </div>

              {/* Message Body */}
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  Message
                </p>

                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-[var(--foreground)]">
                    {selectedMessage.message || "No message content."}
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap justify-end gap-2.5 border-t border-white/10 pt-4">
                {String(selectedMessage.status || "").toLowerCase() !==
                  "read" && (
                  <button
                    type="button"
                    onClick={() => markAsRead(selectedMessage)}
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 px-4 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/10"
                  >
                    <Check size={16} />
                    Mark as Read
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => deleteMessage(selectedMessage)}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-400/20 px-4 py-2.5 text-sm font-medium text-red-300 transition hover:bg-red-400/10"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMessage(null)}
                  className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:border-white/20 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Message Detail                                                              */
/* -------------------------------------------------------------------------- */

function MessageDetail({
  label,
  value,
  breakWords = false,
}: {
  label: string;
  value: string;
  breakWords?: boolean;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
        {label}
      </p>

      <p className={`text-sm ${breakWords ? "break-all" : ""}`}>{value}</p>
    </div>
  );
}
