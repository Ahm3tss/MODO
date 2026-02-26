"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { createMember, deleteMember } from "../../actions/team";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  years: number;
  image_url: string | null;
  display_order: number;
  is_published: boolean;
}

const emptyForm = { name: "", role: "", specialty: "", bio: "", years: 1, displayOrder: 0 };

export default function TeamAdminPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const refresh = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("team_members")
      .select("*")
      .order("display_order");
    setMembers(data ?? []);
  };

  useEffect(() => { refresh(); }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await createMember(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setShowForm(false);
        setForm(emptyForm);
        await refresh();
      }
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (!confirm(`Delete ${name}?`)) return;
    startTransition(async () => {
      await deleteMember(id);
      await refresh();
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Team Members</h1>
          <p className="text-slate-400 text-sm">Manage staff profiles shown on the Our Team page</p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setForm(emptyForm); }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          {showForm ? "Cancel" : "+ Add Member"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">New Team Member</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Dr. Ahmed Al-Rashid"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Role / Title *</label>
                <input
                  name="role"
                  type="text"
                  required
                  placeholder="Lead Surgeon"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-slate-400 text-sm mb-1.5">Specialty *</label>
                <input
                  name="specialty"
                  type="text"
                  required
                  placeholder="Robotic DHI & FUE"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Years Experience *</label>
                <input
                  name="years"
                  type="number"
                  required
                  min="1"
                  max="50"
                  defaultValue="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-1.5">Bio *</label>
              <textarea
                name="bio"
                required
                rows={3}
                placeholder="Short professional biography…"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Photo</label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="w-full text-slate-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Display Order</label>
                <input
                  name="displayOrder"
                  type="number"
                  defaultValue="0"
                  min="0"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isPending}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                {isPending ? "Saving…" : "Add Member"}
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

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {members.length === 0 ? (
          <div className="col-span-3 bg-white/5 border border-white/10 rounded-xl p-12 text-center text-slate-500">
            No team members yet. Run the seed script or add members above.
          </div>
        ) : (
          members.map((member) => (
            <div key={member.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-start gap-3 mb-3">
                {member.image_url ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={member.image_url} alt={member.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 text-orange-400 font-bold text-lg">
                    {member.name[0]}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-white font-medium text-sm truncate">{member.name}</div>
                  <div className="text-orange-400 text-xs">{member.role}</div>
                  <div className="text-slate-500 text-xs">{member.specialty}</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs line-clamp-2 mb-3">{member.bio}</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">{member.years} yrs · order {member.display_order}</span>
                <button
                  onClick={() => handleDelete(member.id, member.name)}
                  disabled={isPending}
                  className="text-red-400 hover:text-red-300 text-xs disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
