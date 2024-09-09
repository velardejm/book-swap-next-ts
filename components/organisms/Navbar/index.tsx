import { useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/atoms/Button';
import { LoginModal } from '@/components/molecules/LogInModal';
import { SignUpModal } from '@/components/molecules/SignUpModal';
import { TestModal } from '@/components/molecules/TestModal';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleSignupModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const toggleTtestModal = () => {
    setIsTestModalOpen(!isTestModalOpen);
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
        <Button className="mr-4 bg-blue-500" onClick={toggleTtestModal}>
            Add Name
          </Button>
          <Button className="mr-4 bg-blue-500" onClick={toggleLoginModal}>
            Log In
          </Button>
          <Button onClick={toggleSignupModal}>Sign Up</Button>
        </div>
      </nav>
      {isTestModalOpen && <TestModal closeModal={toggleTtestModal} />}
      {isLoginModalOpen && <LoginModal closeModal={toggleLoginModal} />}
      {isSignUpModalOpen && <SignUpModal closeModal={toggleSignupModal} />}
    </>
  );
};

export { Navbar };
