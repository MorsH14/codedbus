'use client';

import { useEffect } from 'react';
import { setUserCookie } from '../../utils/cookies';
import { trackUserActivity } from '../../utils/track';


export default function TrackInit() {
  useEffect(() => {
    setUserCookie(); // Set cookie if not already present
    trackUserActivity(); // Trigger tracking API
  }, []);

  return null; // This component renders nothing
}
