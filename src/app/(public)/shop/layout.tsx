import React from 'react';
import type { Metadata } from 'next';
import ShopMenu from './ShopMenu';

export const metadata: Metadata = {
  title: 'User page',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-2xl font-bold mb-8'>Shop</h1>
      <ShopMenu /> 
      {children}
    </div>
  );
};

export default Layout;
