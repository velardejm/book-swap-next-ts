'use client';

import { useState } from 'react';
import { Input } from '@/components/atoms/Input/input';
import { Button } from '@/components/atoms/Button';

export interface SignUpModalProps {
  closeModal: () => void;
}

interface FormData {
  firstname: string;
  lastname: string;
}

const TestModal = ({ closeModal }: SignUpModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
  });

  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    setFormData((prev) => {
      const { name, value } = e.target as HTMLInputElement;
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
  };

  return (
    <div className="absolute top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-zinc-950 opacity-90">
      <div className="flex min-h-96 min-w-96 flex-col rounded-2xl bg-slate-100">
        <button className="mr-5 mt-2 self-end" onClick={closeModal}>
          x
        </button>
        <div className="flex grow flex-col items-center justify-center">
          <div className="relative -top-4">
            <h2 className="mb-8 text-xl font-bold">What's your name?</h2>
            <form className="min-w-60">
              <Input
                type="text"
                placeholder="First Name"
                className="mb-2"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="mb-2"
                name="lastname"
                value={formData.lastname}
              />
              <Button className="mx-auto block">Add</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestModal };
