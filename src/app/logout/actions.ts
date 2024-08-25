// app/logout/actions.ts

import { createClient } from '@/utils/supabase/server';

export async function logout() {
  const supabase = createClient();

  // Perform the sign-out
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error signing out:', error);
    return;
  }

  // Redirect the user to the login page after signing out
  // Use Next.js redirect method
  return { redirect: '/login' };
}

