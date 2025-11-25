'use client';

import { getConfig } from '@/lib/config';
import { useState, useEffect } from 'react';

export default function SocialLinks() {
  const [config, setConfig] = useState(getConfig());

  useEffect(() => {
    const handleStorageChange = () => {
      setConfig(getConfig());
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(() => {
      const newConfig = getConfig();
      if (JSON.stringify(newConfig) !== JSON.stringify(config)) {
        setConfig(newConfig);
      }
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [config]);

  const hasLinks = config.website || config.twitter || config.telegram;

  if (!hasLinks) {
    return null;
  }

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '40px',
    }}>
      {config.website && (
        <a
          href={config.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 24px',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.3)',
            borderRadius: '8px',
            color: '#60a5fa',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.1)';
          }}
        >
          Website
        </a>
      )}

      {config.twitter && (
        <a
          href={config.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 24px',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.3)',
            borderRadius: '8px',
            color: '#60a5fa',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.1)';
          }}
        >
          Twitter
        </a>
      )}

      {config.telegram && (
        <a
          href={config.telegram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 24px',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.3)',
            borderRadius: '8px',
            color: '#60a5fa',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.1)';
          }}
        >
          Telegram
        </a>
      )}
    </div>
  );
}

