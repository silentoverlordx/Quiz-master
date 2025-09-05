import { supabase } from "./supabaseClient.js";

export function generateRoomCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase(); // e.g. X9TQ4B
}

// Create room
export async function createRoom(hostId) {
  const code = generateRoomCode();
  const { data, error } = await supabase
    .from("rooms")
    .insert([{ room_code: code, host_id: hostId }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

// Join room
export async function joinRoom(roomCode, playerId) {
  const { data: room } = await supabase
    .from("rooms")
    .select("*")
    .eq("room_code", roomCode)
    .single();

  if (!room) throw new Error("Room not found");

  await supabase.from("player_room").insert([{ room_id: room.id, player_id: playerId }]);
  return room;
}

