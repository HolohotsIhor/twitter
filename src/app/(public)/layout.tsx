import React from 'react';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User page',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen '>
      <Header />
      <div className='flex justify-center px-4 py-8'>
        <div className='w-full max-w-xl'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
