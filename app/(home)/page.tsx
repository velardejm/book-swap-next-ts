import { Button, buttonVariants } from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/organisms/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Hello World!</h1>
      <Button
        className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
      >
        Click Here
      </Button>
    </main>
  );
}
