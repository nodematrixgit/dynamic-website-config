'use client';

import { getConfig, getChainName } from '@/lib/config';
import { useEffect, useState } from 'react';

export default function TokenInfo() {
  const [config, setConfig] = useState(getConfig());

  useEffect(() => {
    // Listen for config updates
    const handleStorageChange = () => {
      setConfig(getConfig());
    };

    window.addEventListener('storage', handleStorageChange);
    // Also check periodically for updates
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

  const chainName = getChainName(config.chain);

  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      {config.tokenName && (
        <>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {config.tokenName}
          </h1>
          
          {config.tokenSymbol && (
            <div style={{
              fontSize: '24px',
              color: '#94a3b8',
              marginBottom: '32px',
              fontWeight: '600',
            }}>
              ${config.tokenSymbol}
            </div>
          )}

          {config.description && (
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#cbd5e1',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
            }}>
              {config.description}
            </p>
          )}

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '40px',
          }}>
            {config.chain && (
              <div style={{
                padding: '12px 24px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                fontSize: '14px',
              }}>
                Chain: {chainName}
              </div>
            )}
            
            {config.totalSupply && (
              <div style={{
                padding: '12px 24px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                fontSize: '14px',
              }}>
                Supply: {parseInt(config.totalSupply).toLocaleString()}
              </div>
            )}
          </div>
        </>
      )}

      {!config.tokenName && (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '16px',
            color: '#94a3b8',
          }}>
            Waiting for Configuration
          </h2>
          <p style={{
            color: '#64748b',
            fontSize: '16px',
          }}>
            Connect your NodeMatrix workflow to see token information here.
          </p>
        </div>
      )}
    </div>
  );
}

