'use client';
import { useFirebaseUserContext } from '@/context/UserContext';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  const user = useFirebaseUserContext();
  console.log(user);

  return (
    <nav className='flex justify-between px-10 py-6'>
      <h1>Catalog</h1>
      <div>{user ? <Link href='/dashboard'>Dashboard</Link> : <Link href='/login'>Login</Link>}</div>
    </nav>
  );
}

export default Navbar;
