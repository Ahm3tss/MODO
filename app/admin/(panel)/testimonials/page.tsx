"use client";

import { useEffect, useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  toggleTestimonialPublished,
} from "../../actions/testimonials";

interface Testimonial {
  id: string;
  name: string;
  country: string;
  text: string;
  rating: number;
  page: string;
  is_published: boolean;
}

const PAGE_OPTIONS = [
  { value: "home", label: "Home page" },
  { value: "results", label: "Results page" },
  { value: "both", label: "Both pages" },
];

const emptyForm = { name: "", country: "", text: "", rating: 5, page: "both" };

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setTestimonials(data ?? []));
  }, []);

  const refresh = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    setTestimonials(data ?? []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = editingId
        ? await updateTestimonial(editingId, form)
        : await createTestimonial(form);
      if (result?.error) {
        setError(result.error);
      } else {
        setShowForm(false);
        setEditingId(null);
        setForm(emptyForm);
        await refresh();
      }
    });
  };

  const handleEdit = (t: Testimonial) => {
    setForm({ name: t.name, country: t.country, text: t.text, rating: t.rating, page: t.page });
    setEditingId(t.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    startTransition(async () => {
      await deleteTestimonial(id);
      await refresh();
    });
  };

  const handleToggle = (id: string, current: boolean) => {
    startTransition(async () => {
      await toggleTestimonialPublished(id, current);
      await refresh();
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Testimonials</h1>
          <p className="text-slate-400 text-sm">Manage patient quotes shown on the site</p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(emptyForm); }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          {showForm && !editingId ? "Cancel" : "+ Add Testimonial"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">
            {editingId ? "Edit Testimonial" : "New Testimonial"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Patient Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="e.g. James T."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Country *</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  required
                  placeholder="e.g. United Kingdom"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Show On</label>
                <select
                  value={form.page}
                  onChange={(e) => setForm({ ...form, page: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                >
                  {PAGE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-[#0f172a]">{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1.5">Quote *</label>
              <textarea
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                required
                rows={3}
                placeholder="The patient's testimonial in their own words…"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1.5">Rating (1-5)</label>
              <input
                type="number"
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) || 5 })}
                min="1"
                max="5"
                className="w-32 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isPending}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                {isPending ? "Saving…" : editingId ? "Update" : "Add Testimonial"}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setEditingId(null); setForm(emptyForm); }}
                className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-slate-400 font-medium px-4 py-3">Patient</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Quote</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Page</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Status</th>
              <th className="text-right text-slate-400 font-medium px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-slate-500 py-12">
                  No testimonials yet.
                </td>
              </tr>
            ) : (
              testimonials.map((t) => (
                <tr key={t.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3">
                    <div className="text-white font-medium">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.country}</div>
                    <div className="text-orange-400 text-xs mt-0.5">{"★".repeat(t.rating)}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-300 text-xs max-w-sm">
                    <p className="line-clamp-2">{t.text}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-white/10 text-slate-300 text-xs px-2 py-1 rounded-full capitalize">
                      {t.page}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggle(t.id, t.is_published)}
                      disabled={isPending}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                        t.is_published
                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                          : "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30"
                      }`}
                    >
                      {t.is_published ? "Published" : "Hidden"}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={() => handleEdit(t)}
                        className="text-orange-400 hover:text-orange-300 text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(t.id)}
                        disabled={isPending}
                        className="text-red-400 hover:text-red-300 text-xs disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
