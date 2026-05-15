'use client';

import { useEffect } from 'react';

/** Restores the system cursor for Sanity Studio (portals render outside .studio-page). */
export default function StudioCursorFix() {
  useEffect(() => {
    document.documentElement.setAttribute('data-studio', '');

    return () => {
      document.documentElement.removeAttribute('data-studio');
    };
  }, []);

  return null;
}
