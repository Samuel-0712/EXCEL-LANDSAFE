import { createClient } from '@supabase/supabase-js';

// Read from env with fallback constants to ensure client bundle always has valid connection
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yhvetsijqoszuqhkohkm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodmV0c2lqcW9zenVxaGtvaGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjQwOTEsImV4cCI6MjEwMTYwMDA5MX0.4csluqUnT-I3hwZ3g57e0cFmeP7eoxsk4781BY4C7Cg';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitInquiryToSupabase(formData: Record<string, any>) {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([{
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination || null,
        message: formData.message || 'Direct website inquiry',
        created_at: new Date().toISOString()
      }]);

    if (error) {
      console.error("Supabase error response:", error);
    } else {
      console.log("Supabase insert success:", data);
    }

    return { data, error };
  } catch (err: any) {
    console.error("Supabase exception caught:", err);
    return { data: null, error: err };
  }
}
