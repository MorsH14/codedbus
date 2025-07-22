'use client';

import { useEffect, useState } from 'react';

type Preferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent');
    if (!saved) {
      setVisible(true);
    } else {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setPreferences(parsed);
        }
      } catch {
        setVisible(true);
      }
    }
  }, []);

  const handleConsent = (value: 'all' | 'none') => {
    const updatedPreferences: Preferences = {
      necessary: true,
      analytics: value === 'all',
      marketing: value === 'all',
      functional: value === 'all',
    };
    setPreferences(updatedPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(updatedPreferences));
    setVisible(false);
  };

  const handleToggle = (key: keyof Preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setVisible(false);
    setShowPreferences(false);
  };

  const preferenceKeys: Array<keyof Preferences> = ['analytics', 'marketing', 'functional'];

  return visible ? (
    <div style={styles.container}>
      <div style={styles.content}>
        <h4 style={styles.title}>This website uses cookies</h4>
        <p style={styles.text}>
          Cookies and similar technologies are used to personalize content, ads, and improve your experience. You can manage your preferences below.
        </p>

        {showPreferences ? (
          <div style={{ textAlign: 'left' }}>
            {preferenceKeys.map((key) => (
              <label key={key} style={{ display: 'block', margin: '5px 0' }}>
                <input
                  type="checkbox"
                  checked={preferences[key]}
                  onChange={() => handleToggle(key)}
                />{' '}
                Enable {key}
              </label>
            ))}
            <div style={styles.buttonRow}>
              <button onClick={savePreferences} style={styles.filled}>
                Save Preferences
              </button>
            </div>
          </div>
        ) : (
          <div style={styles.buttonRow}>
            <button onClick={() => setShowPreferences(true)} style={styles.outlined}>
              Personalize preferences
            </button>
            <button onClick={() => handleConsent('none')} style={styles.outlined}>
              Decline all
            </button>
            <button onClick={() => handleConsent('all')} style={styles.filled}>
              Allow all
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: '20px',
    borderTop: '1px solid #ccc',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
  buttonRow: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '15px',
  },
  outlined: {
    border: '1px solid #000',
    background: 'transparent',
    color: '#000',
    padding: '10px 18px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  filled: {
    background: '#000',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
