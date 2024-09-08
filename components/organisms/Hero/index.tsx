import { Button, buttonVariants } from '@/components/atoms/Button';

const Hero = () => {
  return (
    <section className="flex flex-grow flex-col items-center justify-start bg-blue-300">
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <Button className="">Explore Books</Button>
    </section>
  );
};

export { Hero };
