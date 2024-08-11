import { Navbar } from '@/components/organisms/Navbar';
import { LoginModal } from '@/components/organisms/LogInModal';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
      </main>
      <LoginModal />
    </>
  );
}
