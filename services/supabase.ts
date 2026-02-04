import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lwhtlexjvdemiiwplldx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3aHRsZXhqdmRlbWlpd3BsbGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNDM3MzIsImV4cCI6MjA4NTcxOTczMn0.dGm52EA_yB4RiBLOT63V7SHhWog6QCdb3fZ6JZIihsU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
