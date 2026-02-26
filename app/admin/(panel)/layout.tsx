import Link from "next/link";
import { logout } from "../actions/auth";

const navItems = [
  { label: "Results", href: "/admin/results", icon: "🖼️" },
  { label: "Blog", href: "/admin/blog", icon: "📝" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "💬" },
  { label: "Team", href: "/admin/team", icon: "👥" },
  { label: "Stats", href: "/admin/stats", icon: "📊" },
  { label: "Contact", href: "/admin/contact", icon: "📞" },
  { label: "Submissions", href: "/admin/submissions", icon: "📩" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020410] flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/10 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/results" className="block">
            <div className="text-lg font-bold text-white tracking-widest">
              MODO<span className="text-orange-500">CLINIC</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Admin Panel</div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <form action={logout}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium"
            >
              <span className="text-base">🚪</span>
              Logout
            </button>
          </form>
          <Link
            href="/"
            target="_blank"
            className="mt-1 flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
          >
            <span className="text-base">🌐</span>
            View Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
