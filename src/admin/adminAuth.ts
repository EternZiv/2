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
      return null;
    }
    return session;
  } catch {
    localStorage.removeItem(ADMIN_KEY);
    return null;
  }
}

export function setAdminSession(username: string) {
  const session: AdminSession = { username, loggedInAt: Date.now() };
  localStorage.setItem(ADMIN_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  localStorage.removeItem(ADMIN_KEY);
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
  return hashHex === "5964f30b02cb1e5693e470926bccd68e366033bd9bd59fbeb9573d34ff7ad377";
}
