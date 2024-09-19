import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hkvtsgxhslhkhvtkoaxq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdnRzZ3hoc2xoa2h2dGtvYXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMTU0MjYsImV4cCI6MjA0MDY5MTQyNn0.-8uOoi3iumaDX7Qm6be3Rp8wY7fBN9chUVWIdyf6n0w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
