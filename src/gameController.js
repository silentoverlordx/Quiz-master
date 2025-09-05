import { supabase } from "./supabaseClient.js";
import { fetchQuestions } from "./questions.js";

// Start game → fetch questions
export async function startGame(roomId) {
  const questions = await fetchQuestions(10);
  return questions;
}

// Update score
export async function updateScore(playerId, newScore) {
  await supabase.from("players").update({ score: newScore }).eq("id", playerId);
}

// Get leaderboard
export async function getLeaderboard(roomId) {
  const { data } = await supabase
    .from("player_room")
    .select("players(username, avatar, score)")
    .eq("room_id", roomId);
  return data.map(pr => pr.players).sort((a, b) => b.score - a.score);
}

