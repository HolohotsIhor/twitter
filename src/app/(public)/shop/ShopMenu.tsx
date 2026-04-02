'use client';

import { cn } from "@/utils/cn";
import Link from "next/link"
import { usePathname } from "next/navigation";

const ShopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-2 mb-2'>
      <Link href='/shop' className={cn('mr-2', pathname === '/shop' ? 'text-blue-300' : 'text-gray-500')}>SSR</Link>
      <Link href='/shop/ssg' className={cn('mr-2', pathname === '/shop/ssg' ? 'text-blue-300' : 'text-gray-500')}>SSG</Link>
      <Link href='/shop/isr' className={cn('mr-2', pathname === '/shop/isr' ? 'text-blue-300' : 'text-gray-500')}>ISR</Link>
    </nav>
  )
}

export default ShopMenu;