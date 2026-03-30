'use client';

import { usePathname } from 'next/navigation';
import { MenuItem } from './MenuItem';
import { MENU } from './data/menu.data';
import { match } from 'path-to-regexp';

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className='hidden md:flex items-center gap-6'>
      {MENU.map((menuItem) => (
        <MenuItem
          key={menuItem.text}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)} // pathname === menuItem.href
        />
      ))}
    </nav>
  );
};

export default Menu;
