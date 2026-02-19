import { createClient } from '@supabase/supabase-js';

// Wir schreiben die Daten direkt rein - kein import.meta.env mehr!
const supabaseUrl = 'https://lthydbfslhktjdnekqhn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0aHlkYmZzbGhrdGpkbmVrcWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MjczODgsImV4cCI6MjA4NzEwMzM4OH0.9u4cO8SpfhevJMho-qPdq_4ghJT1uoTHpYf6b0OmAfI';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey); 
