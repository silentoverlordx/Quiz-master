import { supabase } from "./supabaseClient.js";

// Signup
export async function signup(email, password, username, avatar) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // create player record
  await supabase.from("players").insert([
    { id: data.user.id, username, avatar, score: 0 }
  ]);
  return data;
}

// Login
export async function login(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}

// Logout
export async function logout() {
  await supabase.auth.signOut();
}

