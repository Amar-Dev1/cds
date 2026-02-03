import { createClient } from '@supabase/supabase-js';

// --- IMPORTANT ---
// The following values are placeholders. You must replace them with your own
// Supabase project URL and public anon key for the application to function correctly.
// You can find these in your Supabase project's API settings.
// It is highly recommended to use environment variables for these values.
const PLACEHOLDER_URL = 'https://example.supabase.co';
const PLACEHOLDER_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

const supabaseUrl = process.env.SUPABASE_URL || PLACEHOLDER_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || PLACEHOLDER_ANON_KEY;

if (supabaseUrl === PLACEHOLDER_URL || supabaseAnonKey === PLACEHOLDER_ANON_KEY) {
    console.warn('Supabase is not configured. Using placeholder credentials. Please update services/supabase.ts or set environment variables with your actual Supabase project URL and anon key.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
