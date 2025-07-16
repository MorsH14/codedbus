'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieConsent');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        This website uses cookies to enhance user experience. By continuing, you accept our use of cookies.
      </p>
      <button onClick={handleAccept} style={styles.button}>Accept</button>
    </div>
  );
}

const styles = {
  banner: {
    position: 'fixed' as const,
    bottom: 0,
    width: '100%',
    background: '#000',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
  button: {
    background: '#0f62fe',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
