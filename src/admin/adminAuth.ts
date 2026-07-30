import { supabase } from "../lib/supabase";

const ADMIN_KEY = "p2g_admin_auth";

export interface AdminSession {
  username: string;
  loggedInAt: number;
}

export function getAdminSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(ADMIN_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as AdminSession;
    if (Date.now() - session.loggedInAt > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(ADMIN_KEY);
      localStorage.removeItem("p2g_admin_hash");
      return null;
    }
    return session;
  } catch {
    localStorage.removeItem(ADMIN_KEY);
    localStorage.removeItem("p2g_admin_hash");
    return null;
  }
}

export function setAdminSession(username: string) {
  const session: AdminSession = { username, loggedInAt: Date.now() };
  localStorage.setItem(ADMIN_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  localStorage.removeItem(ADMIN_KEY);
  localStorage.removeItem("p2g_admin_hash");
}

export async function verifyAdminPassword(
  username: string,
  password: string
): Promise<boolean> {
  if (username !== "power2go") return false;
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  
  try {
    const { data: isValid, error } = await supabase.rpc("verify_admin_credentials", {
      p_username: username,
      p_password_hash: hashHex,
    });
    
    if (error || !isValid) {
      return false;
    }
    
    localStorage.setItem("p2g_admin_hash", hashHex);
    return true;
  } catch (err) {
    console.error("Database auth validation failed:", err);
    return false;
  }
}
