export interface TokenConfig {
  tokenName?: string;
  tokenSymbol?: string;
  tokenAddress?: string;
  poolAddress?: string;
  totalSupply?: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  description?: string;
  chain?: string;
}

let cachedConfig: TokenConfig | null = null;

export function getConfig(): TokenConfig {
  if (typeof window !== 'undefined' && cachedConfig) {
    return cachedConfig;
  }
  
  // Try to load from localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('tokenConfig');
    if (stored) {
      try {
        cachedConfig = JSON.parse(stored);
        return cachedConfig || {};
      } catch (e) {
        console.error('Failed to parse stored config:', e);
      }
    }
  }
  
  return {};
}

export function updateConfig(config: Partial<TokenConfig>): void {
  const current = getConfig();
  const updated = { ...current, ...config };
  cachedConfig = updated;
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('tokenConfig', JSON.stringify(updated));
  }
}

export function getChainName(chain?: string): string {
  const chainMap: Record<string, string> = {
    monad: 'Monad',
    base: 'Base',
    ethereum: 'Ethereum',
    bsc: 'BSC',
    solana: 'Solana',
  };
  return chainMap[chain || process.env.NEXT_PUBLIC_CHAIN || 'monad'] || 'Monad';
}

export function getExplorerUrl(chain?: string): string {
  const explorerMap: Record<string, string> = {
    monad: 'https://explorer.monad.xyz',
    base: 'https://basescan.org',
    ethereum: 'https://etherscan.io',
    bsc: 'https://bscscan.com',
  };
  return explorerMap[chain || process.env.NEXT_PUBLIC_CHAIN || 'monad'] || 'https://explorer.monad.xyz';
}

export function getDexUrl(chain?: string): string {
  const dexMap: Record<string, string> = {
    monad: 'https://dexscreener.com/monad',
    base: 'https://dexscreener.com/base',
    ethereum: 'https://dexscreener.com/ethereum',
    bsc: 'https://dexscreener.com/bsc',
  };
  return dexMap[chain || process.env.NEXT_PUBLIC_CHAIN || 'monad'] || 'https://dexscreener.com';
}

