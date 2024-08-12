import { useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/atoms/Button';
import { LoginModal } from '@/components/molecules/LoginModal';
import { SignUpModal } from '@/components/molecules/SignUpModal';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const openSignupModal = () => {
    setIsSignUpModalOpen(true);
  };
  const closeSignupModal = () => {
    setIsSignUpModalOpen(false);
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
          <Button onClick={openSignupModal}>Sign Up</Button>
        </div>
      </nav>
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      {isSignUpModalOpen && <SignUpModal closeModal={closeSignupModal} />}
    </>
  );
};

export { Navbar };
