"use client";

import { useEffect, useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";
import { updateContactInfo } from "../../actions/contact";

interface ContactField {
  id: string;
  key: string;
  value: string;
  label: string;
}

export default function ContactAdminPage() {
  const [fields, setFields] = useState<ContactField[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("contact_info")
      .select("*")
      .order("id")
      .then(({ data }) => {
        setFields(data ?? []);
        const init: Record<string, string> = {};
        (data ?? []).forEach((f) => { init[f.key] = f.value; });
        setValues(init);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await updateContactInfo(values);
      if (result?.error) {
        setError(result.error);
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Contact Info</h1>
        <p className="text-slate-400 text-sm">
          Update clinic contact details shown on the website and footer
        </p>
      </div>

      {fields.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center text-slate-500">
          No contact fields found. Run the seed script to populate initial values.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            {fields.map((field) => (
              <div key={field.id}>
                <label className="block text-slate-400 text-sm mb-1.5">{field.label}</label>
                {field.key === "address_line2" || field.key === "hours_weekend" ? (
                  <input
                    type="text"
                    value={values[field.key] ?? ""}
                    onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                ) : field.key === "email" ? (
                  <input
                    type="email"
                    value={values[field.key] ?? ""}
                    onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                ) : (
                  <input
                    type="text"
                    value={values[field.key] ?? ""}
                    onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                )}
              </div>
            ))}
          </div>

          {error && (
            <p className="text-red-400 text-sm mt-4">{error}</p>
          )}

          <div className="flex items-center gap-4 mt-6">
            <button
              type="submit"
              disabled={isPending}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              {isPending ? "Saving…" : "Save Changes"}
            </button>
            {saved && (
              <span className="text-green-400 text-sm">Changes saved ✓</span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
