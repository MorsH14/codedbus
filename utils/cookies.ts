// utils/cookies.ts

export function setUserCookie(): void {
  if (typeof document === 'undefined') return; // safety for server-side

  const hasCookie = document.cookie.includes('user_id=');
  if (!hasCookie) {
    const userId = crypto.randomUUID();
    document.cookie = `user_id=${userId}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
    console.log('Cookie set:', userId);
  } else {
    console.log('Cookie already exists');
  }
}

export function getUserCookie(): string | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(/(?:^|;\s*)user_id=([^;]*)/);
  return match ? match[1] : null;
}
