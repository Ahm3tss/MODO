import { createClient } from "@/lib/supabase/server";
import ResultsAdminClient from "./ResultsAdminClient";

export const dynamic = "force-dynamic";

export default async function AdminResultsPage() {
  const supabase = await createClient();
  const { data: results, error } = await supabase
    .from("results")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Results Gallery</h1>
        <p className="text-slate-400 text-sm">Upload before/after patient photos</p>
      </div>

      <ResultsAdminClient results={results ?? []} error={error?.message} />
    </div>
  );
}
