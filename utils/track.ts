import { getUserCookie } from './cookies';

export async function trackUserActivity(path: string = ''): Promise<void> {
  if (typeof window === 'undefined') return;

  const data = {
    url: path || window.location.href,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    userId: getUserCookie(),
  };

  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Tracking error:', err);
  }
}
