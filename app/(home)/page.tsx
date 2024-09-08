'use client';

import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';

export default function Home() {
  
  return (
    <>
      <main className='flex flex-col min-h-screen'>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
