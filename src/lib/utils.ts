import { nanoid } from "nanoid";
import { PLANES } from "./consts";

export function generateUsername() {
  const plane = PLANES[Math.floor(Math.random() * PLANES.length)];
  return `${plane}-${nanoid(10)}`;
}

export function formatTimeRemaining(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
