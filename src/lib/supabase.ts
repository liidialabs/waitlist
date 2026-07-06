import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dsnaudpxzavuhzxbznlx.supabase.co";
const supabaseKey =
  "sb_publishable_pgZWdC7ZUVNsPQoomKgzNA_BqpyX_au";

export const supabase = createClient(supabaseUrl, supabaseKey);
