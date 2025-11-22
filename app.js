import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://evlelsygprwpvhfppxmn.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bGVsc3lncHJ3cHZoZnBweG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4Mzk2NDksImV4cCI6MjA3OTQxNTY0OX0.eyGrS_TUd6VYJ_gLVyzpdT5_bJ_5wBM5PHZpAN62LVY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

// Test basic connection
export async function loadChallenges() {
  const { data, error } = await supabase
    .from("challenges")
    .select("*");

  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Challenges:", data);
  }
}
