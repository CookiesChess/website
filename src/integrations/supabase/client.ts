// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vjigqfcusagiavwazmsz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqaWdxZmN1c2FnaWF2d2F6bXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDA2MjQsImV4cCI6MjA1NDc3NjYyNH0.6wxGBCA21ISzroZ-J3vqr_jGJXw3mIcnpWAP5WHj5x8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);