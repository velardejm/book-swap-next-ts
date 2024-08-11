'use client';

import { useState } from 'react';

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  return (
    <>
      {!isModalOpen ? null : (
        <div className="absolute top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-zinc-950 opacity-90">
          <div className="min-h-96 min-w-96 bg-slate-100">
            <h1>Log in Modal</h1>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginModal };
