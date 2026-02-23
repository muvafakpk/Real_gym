import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://anddvxzoqhzdpgfstndo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZGR2eHpvcWh6ZHBnZnN0bmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MzY1NDMsImV4cCI6MjA4NzMxMjU0M30.91QpQdBBPKVbEj83P-MSM5dvtoyuGuK8uusiqOQ8LEw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);