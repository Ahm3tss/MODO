/**
 * Seed script — populates Supabase with initial data from lib/content.ts
 *
 * Usage (after setting up .env.local):
 *   npx tsx scripts/seed-supabase.ts
 *
 * Requirements:
 *   npm install -D tsx dotenv
 *   (tsx is likely already available if you have a modern Next.js setup)
 */

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

// ─── DATA ────────────────────────────────────────────────────────────────────

const testimonials = [
  // Home page
  {
    name: "Michael T.",
    country: "United Kingdom",
    text: "I came to MODO expecting a procedure. I left with my confidence restored. The team's precision and care exceeded every expectation.",
    rating: 5,
    page: "home",
    is_published: true,
  },
  // Results page
  {
    name: "Michael R.",
    country: "USA",
    text: "The results exceeded my expectations. The team's attention to detail was incredible.",
    rating: 5,
    page: "results",
    is_published: true,
  },
  {
    name: "James L.",
    country: "UK",
    text: "Professional from start to finish. My hairline looks completely natural.",
    rating: 5,
    page: "results",
    is_published: true,
  },
  {
    name: "Ahmed K.",
    country: "UAE",
    text: "Best decision I ever made. The DHI technique gave me amazing density.",
    rating: 5,
    page: "results",
    is_published: true,
  },
];

const teamMembers = [
  {
    name: "Dr. Alex Modo",
    role: "Chief Medical Officer",
    specialty: "Robotic DHI",
    years: 15,
    image_url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
    bio: "Pioneer of the Micro-DHI technique with over 10,000 successful procedures.",
    display_order: 0,
    is_published: true,
  },
  {
    name: "Dr. Sarah Chen",
    role: "Head Dermatologist",
    specialty: "Scalp Health",
    years: 12,
    image_url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    bio: "Specializes in scalp diagnostics and pre-operative optimization.",
    display_order: 1,
    is_published: true,
  },
  {
    name: "James Wilson",
    role: "Robotic Technician Lead",
    specialty: "ARTAS Systems",
    years: 8,
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Expert in robotic calibration and precision extraction protocols.",
    display_order: 2,
    is_published: true,
  },
  {
    name: "Dr. Ahmed Yilmaz",
    role: "FUE Specialist",
    specialty: "Sapphire Techniques",
    years: 10,
    image_url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop",
    bio: "Master of sapphire blade incisions and density optimization.",
    display_order: 3,
    is_published: true,
  },
  {
    name: "Maria Garcia",
    role: "Patient Care Coordinator",
    specialty: "Patient Experience",
    years: 6,
    image_url: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
    bio: "Ensures seamless patient journey from consultation to recovery.",
    display_order: 4,
    is_published: true,
  },
  {
    name: "Elena Popov",
    role: "Head Nurse",
    specialty: "Clinical Operations",
    years: 9,
    image_url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    bio: "Oversees surgical protocols and team coordination.",
    display_order: 5,
    is_published: true,
  },
];

const siteStats = [
  // Home trust bar
  { key: "home_graft_survival", value: "99", suffix: "%", label: "Graft Survival", page: "home.trustBar", display_order: 0 },
  { key: "home_procedures", value: "5000", suffix: "+", label: "Procedures", page: "home.trustBar", display_order: 1 },
  { key: "home_experience", value: "12", suffix: " yrs", label: "Experience", page: "home.trustBar", display_order: 2 },
  { key: "home_countries", value: "15", suffix: "+", label: "Countries", page: "home.trustBar", display_order: 3 },

  // About Us stats
  { key: "about_procedures", value: "10K", suffix: "+", label: "Procedures", page: "aboutUs", display_order: 0 },
  { key: "about_countries", value: "40", suffix: "+", label: "Countries", page: "aboutUs", display_order: 1 },
  { key: "about_satisfaction", value: "98", suffix: "%", label: "Satisfaction", page: "aboutUs", display_order: 2 },
  { key: "about_years", value: "15", suffix: "+", label: "Years", page: "aboutUs", display_order: 3 },

  // Robotic DHI technique
  { key: "robotic_survival", value: "99.5", suffix: "%", label: "Graft Survival", page: "techniques.roboticDhi", display_order: 0 },
  { key: "robotic_density", value: "80", suffix: "+", label: "Grafts/cm²", page: "techniques.roboticDhi", display_order: 1 },
  { key: "robotic_procedures", value: "3000", suffix: "+", label: "Procedures", page: "techniques.roboticDhi", display_order: 2 },
  { key: "robotic_hours", value: "6", suffix: "-8h", label: "Session Length", page: "techniques.roboticDhi", display_order: 3 },

  // Sapphire FUE
  { key: "sapphire_survival", value: "98", suffix: "%", label: "Graft Survival", page: "techniques.sapphireFue", display_order: 0 },
  { key: "sapphire_healing", value: "3", suffix: "-5 days", label: "Healing Time", page: "techniques.sapphireFue", display_order: 1 },
  { key: "sapphire_precision", value: "0.8", suffix: "mm", label: "Blade Precision", page: "techniques.sapphireFue", display_order: 2 },
  { key: "sapphire_procedures", value: "2000", suffix: "+", label: "Procedures", page: "techniques.sapphireFue", display_order: 3 },

  // DHI Manual
  { key: "dhi_survival", value: "97", suffix: "%", label: "Graft Survival", page: "techniques.dhiManual", display_order: 0 },
  { key: "dhi_control", value: "100", suffix: "%", label: "Artistic Control", page: "techniques.dhiManual", display_order: 1 },
  { key: "dhi_procedures", value: "1500", suffix: "+", label: "Procedures", page: "techniques.dhiManual", display_order: 2 },
  { key: "dhi_downtime", value: "2", suffix: "-3 days", label: "Downtime", page: "techniques.dhiManual", display_order: 3 },
];

const contactInfo = [
  { key: "whatsapp_number", value: "+90 532 389 8193", label: "WhatsApp Number" },
  { key: "whatsapp_href", value: "https://wa.me/905323898193", label: "WhatsApp Link" },
  { key: "email", value: "info@modoclinic.com", label: "Email Address" },
  { key: "address_line1", value: "Istanbul, Turkey", label: "Address Line 1" },
  { key: "address_line2", value: "Nişantaşı Medical District", label: "Address Line 2" },
  { key: "hours_weekday", value: "Mon-Sat: 9:00 - 18:00", label: "Weekday Hours" },
  { key: "hours_weekend", value: "Sunday: Closed", label: "Weekend Hours" },
];

// ─── SEED FUNCTIONS ────────────────────────────────────────────────────────────

async function seed(
  table: string,
  data: Record<string, unknown>[],
  conflictColumn?: string
) {
  console.log(`  Seeding ${table}…`);
  const query = supabase.from(table).upsert(data, {
    onConflict: conflictColumn,
    ignoreDuplicates: false,
  });
  const { error } = await query;
  if (error) {
    console.error(`  ❌ ${table}: ${error.message}`);
  } else {
    console.log(`  ✅ ${table}: ${data.length} rows`);
  }
}

async function main() {
  console.log("🌱 Seeding Supabase database…\n");

  await seed("testimonials", testimonials);
  await seed("team_members", teamMembers);
  await seed("site_stats", siteStats, "key");
  await seed("contact_info", contactInfo, "key");

  console.log("\n✅ Seed complete!");
  console.log("\nNext steps:");
  console.log("  1. Create storage buckets in Supabase Dashboard:");
  console.log("     - results-images (public)");
  console.log("     - team-photos (public)");
  console.log("     - blog-covers (public)");
  console.log("  2. Run the SQL schema from the plan to create tables");
  console.log("  3. Start your dev server: npm run dev");
  console.log("  4. Visit http://localhost:3000/admin/login");
}

main().catch(console.error);
