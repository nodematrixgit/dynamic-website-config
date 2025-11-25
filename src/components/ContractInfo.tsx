'use client';

import { getConfig, getExplorerUrl, getDexUrl } from '@/lib/config';
import { useState, useEffect } from 'react';

export default function ContractInfo() {
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

  if (!config.tokenAddress) {
    return null;
  }

  const explorerUrl = getExplorerUrl(config.chain);
  const dexUrl = getDexUrl(config.chain);

  return (
    <div style={{
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '32px',
      maxWidth: '800px',
      margin: '0 auto 40px auto',
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '24px',
        color: '#e2e8f0',
      }}>
        Contract Information
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div>
          <div style={{
            fontSize: '12px',
            color: '#94a3b8',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Token Address
          </div>
          <div style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#e2e8f0',
            wordBreak: 'break-all',
            padding: '12px',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '6px',
          }}>
            {config.tokenAddress}
          </div>
          <a
            href={`${explorerUrl}/address/${config.tokenAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '8px',
              fontSize: '14px',
              color: '#60a5fa',
            }}
          >
            View on Explorer →
          </a>
        </div>

        {config.poolAddress && (
          <div>
            <div style={{
              fontSize: '12px',
              color: '#94a3b8',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Pool Address
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#e2e8f0',
              wordBreak: 'break-all',
              padding: '12px',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '6px',
            }}>
              {config.poolAddress}
            </div>
            <a
              href={`${dexUrl}/${config.poolAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '8px',
                fontSize: '14px',
                color: '#60a5fa',
              }}
            >
              View on DexScreener →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

