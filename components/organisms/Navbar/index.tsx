import { useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/atoms/Button';
import { LoginModal } from '@/components/molecules/LogInModal';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <>
      <nav className="flex justify-between p-6">
        <div>
          <Link href="#" className="text-xl font-bold">
            BookSwap
          </Link>
        </div>
        <div className="flex">
          <Button className="mr-4 bg-blue-500" onClick={openLoginModal}>
            Log In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
    </>
  );
};

export { Navbar };
