"use client";

import { useEffect, useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";
import { markAsRead, deleteSubmission } from "../../actions/submissions";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState<Submission | null>(null);

  const refresh = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    setSubmissions(data ?? []);
  };

  useEffect(() => { refresh(); }, []);

  const handleOpen = (sub: Submission) => {
    setSelected(sub);
    if (!sub.is_read) {
      startTransition(async () => {
        await markAsRead(sub.id);
        await refresh();
      });
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this submission?")) return;
    startTransition(async () => {
      await deleteSubmission(id);
      if (selected?.id === id) setSelected(null);
      await refresh();
    });
  };

  const unread = submissions.filter((s) => !s.is_read).length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
          Form Submissions
          {unread > 0 && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {unread} new
            </span>
          )}
        </h1>
        <p className="text-slate-400 text-sm">Contact form submissions from the website</p>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center text-slate-500">
          No submissions yet. They will appear here when visitors fill out the contact form.
        </div>
      ) : (
        <div className="flex gap-6">
          {/* List */}
          <div className="w-80 shrink-0 space-y-2">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                onClick={() => handleOpen(sub)}
                className={`bg-white/5 border rounded-xl p-4 cursor-pointer transition-colors ${
                  selected?.id === sub.id
                    ? "border-orange-500/50 bg-orange-500/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className={`text-sm font-medium truncate ${sub.is_read ? "text-slate-300" : "text-white"}`}>
                    {sub.name}
                  </span>
                  {!sub.is_read && (
                    <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-slate-500 text-xs truncate mb-1">{sub.email}</p>
                <p className="text-slate-400 text-xs line-clamp-2">{sub.message}</p>
                <p className="text-slate-600 text-xs mt-2">
                  {new Date(sub.created_at).toLocaleDateString("en-GB", {
                    day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
                  })}
                </p>
              </div>
            ))}
          </div>

          {/* Detail */}
          {selected ? (
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-white text-lg font-semibold">{selected.name}</h2>
                  <p className="text-slate-400 text-sm">{new Date(selected.created_at).toLocaleDateString("en-GB", {
                    weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
                  })}</p>
                </div>
                <button
                  onClick={() => handleDelete(selected.id)}
                  disabled={isPending}
                  className="text-red-400 hover:text-red-300 text-sm disabled:opacity-50"
                >
                  Delete
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-slate-500 text-xs mb-1">Email</p>
                    <a href={`mailto:${selected.email}`} className="text-orange-400 hover:underline text-sm">
                      {selected.email}
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-slate-500 text-xs mb-1">Phone</p>
                    <p className="text-white text-sm">{selected.phone || "—"}</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-slate-500 text-xs mb-2">Message</p>
                  <p className="text-slate-200 text-sm whitespace-pre-wrap">{selected.message}</p>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={`mailto:${selected.email}?subject=Re: Your enquiry at MODO Clinic`}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Reply by Email
                  </a>
                  {selected.phone && (
                    <a
                      href={`https://wa.me/${selected.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-12 flex items-center justify-center text-slate-500">
              Select a submission to view details
            </div>
          )}
        </div>
      )}
    </div>
  );
}
