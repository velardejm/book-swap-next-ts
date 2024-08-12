'use client';

import { useState } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { LoginModal } from '@/components/molecules/LogInModal';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const toggleLoginModal = (): void => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  return (
    <>
      <main>
        <Navbar />
      </main>
    </>
  );
}
