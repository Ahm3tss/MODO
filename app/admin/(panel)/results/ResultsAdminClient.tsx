"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { createResult, deleteResult, toggleResultPublished } from "../../actions/results";

const TECHNIQUES = ["Robotic DHI", "Sapphire FUE", "DHI Manual"] as const;

interface Result {
  id: string;
  before_image_url: string;
  after_image_url: string;
  grafts: number;
  technique: string;
  months: number;
  norwood: number;
  age: number;
  tags: string[];
  rating: number;
  is_published: boolean;
  created_at: string;
}

export default function ResultsAdminClient({
  results,
  error,
}: {
  results: Result[];
  error?: string;
}) {
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setFormError(null);
    startTransition(async () => {
      const result = await createResult(formData);
      if (result?.error) {
        setFormError(result.error);
      } else {
        setShowForm(false);
      }
    });
  }

  async function handleDelete(id: string, beforeUrl: string, afterUrl: string) {
    if (!confirm("Delete this result? This cannot be undone.")) return;
    startTransition(async () => {
      await deleteResult(id, beforeUrl, afterUrl);
    });
  }

  async function handleTogglePublish(id: string, current: boolean) {
    startTransition(async () => {
      await toggleResultPublished(id, current);
    });
  }

  return (
    <div className="space-y-6">
      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
          Database error: {error}. Make sure Supabase is configured.
        </div>
      )}

      {/* Add button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
      >
        {showForm ? "Cancel" : "+ Add Result"}
      </button>

      {/* Upload form */}
      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-white font-semibold mb-4">New Patient Result</h2>
          <form action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Before Photo *</label>
                <input
                  type="file"
                  name="beforeImage"
                  accept="image/*"
                  required
                  className="w-full text-slate-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">After Photo *</label>
                <input
                  type="file"
                  name="afterImage"
                  accept="image/*"
                  required
                  className="w-full text-slate-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Technique *</label>
                <select
                  name="technique"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                >
                  {TECHNIQUES.map((t) => (
                    <option key={t} value={t} className="bg-[#0f172a]">{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Grafts *</label>
                <input
                  type="number"
                  name="grafts"
                  required
                  min="500"
                  max="8000"
                  placeholder="e.g. 3500"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Norwood Scale (1-7) *</label>
                <input
                  type="number"
                  name="norwood"
                  required
                  min="1"
                  max="7"
                  placeholder="e.g. 4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Patient Age *</label>
                <input
                  type="number"
                  name="age"
                  required
                  min="18"
                  max="80"
                  placeholder="e.g. 32"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Months Post-Op *</label>
                <input
                  type="number"
                  name="months"
                  required
                  min="1"
                  max="36"
                  placeholder="e.g. 12"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  defaultValue="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1.5">
                Tags <span className="text-slate-500">(comma-separated, e.g. Hairline, Density)</span>
              </label>
              <input
                type="text"
                name="tags"
                placeholder="Hairline, Density, Crown"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            {formError && (
              <p className="text-red-400 text-sm">{formError}</p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isPending}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                {isPending ? "Uploading…" : "Save Result"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Results table */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-slate-400 font-medium px-4 py-3">Photos</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Technique</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Details</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Tags</th>
              <th className="text-left text-slate-400 font-medium px-4 py-3">Status</th>
              <th className="text-right text-slate-400 font-medium px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-slate-500 py-12">
                  No results yet. Upload your first before/after case above.
                </td>
              </tr>
            ) : (
              results.map((result) => (
                <tr key={result.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <div className="relative w-12 h-12 rounded overflow-hidden">
                        <Image
                          src={result.before_image_url}
                          alt="Before"
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                      <div className="relative w-12 h-12 rounded overflow-hidden">
                        <Image
                          src={result.after_image_url}
                          alt="After"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white font-medium">{result.technique}</td>
                  <td className="px-4 py-3 text-slate-300">
                    <div>{result.grafts.toLocaleString()} grafts</div>
                    <div className="text-slate-500 text-xs">
                      Age {result.age} · NW{result.norwood} · {result.months}mo
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {result.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-slate-300 text-xs px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleTogglePublish(result.id, result.is_published)}
                      disabled={isPending}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                        result.is_published
                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                          : "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30"
                      }`}
                    >
                      {result.is_published ? "Published" : "Hidden"}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() =>
                        handleDelete(result.id, result.before_image_url, result.after_image_url)
                      }
                      disabled={isPending}
                      className="text-red-400 hover:text-red-300 text-xs disabled:opacity-50"
                    >
                      Delete
                    </button>
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
