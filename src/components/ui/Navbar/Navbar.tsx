'use client';
import { useFirebaseUserContext } from '@/context/UserContext';
import Link from 'next/link';
import React from 'react';
import { Button, buttonVariants } from '../button';
import Logout from './Logout';

function Navbar() {
  const user = useFirebaseUserContext();
  console.log(user);

  return (
    <nav className='flex justify-between px-10 py-6'>
      <h1>Catalog</h1>
      <div className='flex items-center gap-3'>
        <div>
          {user ? (
            <Link className={buttonVariants({ variant: 'secondary' })} href='/dashboard'>
              Dashboard
            </Link>
          ) : (
            <Link href='/login'>Login</Link>
          )}
        </div>
        <Logout user={user} />
      </div>
    </nav>
  );
}

export default Navbar;
