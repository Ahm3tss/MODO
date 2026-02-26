"use client";

import { useEffect, useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";
import { updateStatFull } from "../../actions/stats";

interface Stat {
  id: string;
  key: string;
  value: string;
  suffix: string;
  label: string;
  page: string;
  display_order: number;
}

const PAGE_LABELS: Record<string, string> = {
  "home.trustBar": "Home — Trust Bar",
  "aboutUs": "About Us — Stats",
  "techniques.roboticDhi": "Technique — Robotic DHI",
  "techniques.sapphireFue": "Technique — Sapphire FUE",
  "techniques.dhiManual": "Technique — DHI Manual",
};

export default function StatsAdminPage() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [edits, setEdits] = useState<Record<string, { value: string; suffix: string; label: string }>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("site_stats")
      .select("*")
      .order("page")
      .order("display_order")
      .then(({ data }) => {
        setStats(data ?? []);
        const initial: typeof edits = {};
        (data ?? []).forEach((s) => {
          initial[s.id] = { value: s.value, suffix: s.suffix, label: s.label };
        });
        setEdits(initial);
      });
  }, []);

  const handleSave = (id: string) => {
    startTransition(async () => {
      const result = await updateStatFull(id, edits[id]);
      if (!result?.error) {
        setSaved({ ...saved, [id]: true });
        setTimeout(() => setSaved((s) => ({ ...s, [id]: false })), 2000);
      }
    });
  };

  // Group stats by page
  const groups = stats.reduce<Record<string, Stat[]>>((acc, s) => {
    (acc[s.page] = acc[s.page] ?? []).push(s);
    return acc;
  }, {});

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Site Stats</h1>
        <p className="text-slate-400 text-sm">
          Update metrics displayed across the site (procedure counts, survival rates, etc.)
        </p>
      </div>

      {stats.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center text-slate-500">
          No stats found. Run the seed script to populate initial values.
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groups).map(([page, group]) => (
            <div key={page} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10 bg-white/5">
                <h2 className="text-white font-medium text-sm">
                  {PAGE_LABELS[page] ?? page}
                </h2>
              </div>
              <div className="divide-y divide-white/5">
                {group.map((stat) => (
                  <div key={stat.id} className="flex items-center gap-4 px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-400 text-xs mb-1">{stat.key}</div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={edits[stat.id]?.value ?? stat.value}
                          onChange={(e) =>
                            setEdits({ ...edits, [stat.id]: { ...edits[stat.id], value: e.target.value } })
                          }
                          className="w-24 bg-white/5 border border-white/10 rounded px-2 py-1.5 text-white text-sm focus:outline-none focus:border-orange-500"
                        />
                        <input
                          type="text"
                          value={edits[stat.id]?.suffix ?? stat.suffix}
                          onChange={(e) =>
                            setEdits({ ...edits, [stat.id]: { ...edits[stat.id], suffix: e.target.value } })
                          }
                          placeholder="suffix"
                          className="w-16 bg-white/5 border border-white/10 rounded px-2 py-1.5 text-white text-sm focus:outline-none focus:border-orange-500"
                        />
                        <input
                          type="text"
                          value={edits[stat.id]?.label ?? stat.label}
                          onChange={(e) =>
                            setEdits({ ...edits, [stat.id]: { ...edits[stat.id], label: e.target.value } })
                          }
                          placeholder="label"
                          className="flex-1 bg-white/5 border border-white/10 rounded px-2 py-1.5 text-white text-sm focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm min-w-fit">
                      Preview:{" "}
                      <span className="text-orange-400 font-semibold">
                        {edits[stat.id]?.value ?? stat.value}
                        {edits[stat.id]?.suffix ?? stat.suffix}
                      </span>
                    </div>
                    <button
                      onClick={() => handleSave(stat.id)}
                      disabled={isPending}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${
                        saved[stat.id]
                          ? "bg-green-500/20 text-green-400"
                          : "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
                      }`}
                    >
                      {saved[stat.id] ? "Saved ✓" : "Save"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
