import { Button, buttonVariants } from '@/components/atoms/Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-6">
      <div>
        <Link href="#" className="text-xl font-bold">
          BookSwap
        </Link>
      </div>
      <div className="flex">
        <Button className="mr-4 bg-blue-500">Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export { Navbar };
