import TokenInfo from '@/components/TokenInfo';
import ContractInfo from '@/components/ContractInfo';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '40px 20px',
    }}>
      <TokenInfo />
      <SocialLinks />
      <ContractInfo />
      
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#64748b',
        fontSize: '14px',
      }}>
        <p>Powered by NodeMatrix</p>
      </footer>
    </main>
  );
}

