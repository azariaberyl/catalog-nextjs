import LandingPage from '@/components/ui/LandingPage/LandingPage';
import Navbar from '@/components/ui/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar user={null} />
      <LandingPage />
    </>
  );
}
