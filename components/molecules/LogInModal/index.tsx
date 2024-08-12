'use client';

import { Input } from '@/components/atoms/Input/input';
import { Button } from '@/components/atoms/Button';

export interface LoginModalProps {
  closeModal: () => void;
}
// const handleFormClicks = (e: React.MouseEvent) => {
//   e.stopPropagation();
// };
const LoginModal = ({ closeModal }: LoginModalProps) => {
  return (
    <div className="absolute top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-zinc-950 opacity-90">
      <div className="flex min-h-96 min-w-96 flex-col rounded-2xl bg-slate-100">
        <button className="mr-5 mt-2 self-end" onClick={closeModal}>
          x
        </button>
        <div className="relative -top-4 flex grow flex-col items-center justify-center">
          <h2 className="mb-8 text-xl font-bold">Create Account</h2>
          <form className="min-w-60">
            <Input
              type="text"
              placeholder="Username"
              className="mb-2"
              name="username"
            />
            <Input
              type="password"
              placeholder="Password"
              className="mb-2"
              name="password"
            />
            <Input
              type="password"
              placeholder="Verify Password"
              className="mb-6"
              name="password-verification"
            />
            <Button className="mx-auto block">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LoginModal };
