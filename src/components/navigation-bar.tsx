'use client';
import React, { HTMLAttributes } from 'react';
import Container, { containerVariantsProps } from './ui/container';
import { cn } from '@/lib/utils';
import { useToast } from './ui/use-toast';
import Link from 'next/link';

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement>, containerVariantsProps {}

function NavigationBar({ size, children, className, ...props }: NavigationBarProps) {
  if (size) {
    return (
      <Container size={size}>
        <nav className={cn(`flex w-full justify-between items-center px-4 pt-3`, className)}>
          <Link href='/'>
            <div className='scroll-m-20 text-2xl font-semibold tracking-tight'>catalog</div>
          </Link>
          {children}
        </nav>
      </Container>
    );
  }

  return (
    <nav className={cn(`flex w-full justify-between items-center px-4 pt-3`, className)}>
      <Link href='/'>
        <div className='scroll-m-20 text-2xl font-semibold tracking-tight'>catalog</div>
      </Link>
      {children}
    </nav>
  );
}

export default NavigationBar;
