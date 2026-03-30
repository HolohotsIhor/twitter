'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { IMenuItem } from './data/menu.data';

interface LinkProps {
  menuItem: IMenuItem;
  isActive?: boolean;
}

const linkClasses = 'text-white/90 hover:text-white transition-colors hover:text-blue-300';

export const MenuItem = ({ menuItem, isActive }: LinkProps) => {
  return (
    <Link href={menuItem.href} className={cn(linkClasses, isActive && 'text-blue-300')}>
      {menuItem.text}
    </Link>
  );
};
