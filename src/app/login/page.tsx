import Link from 'next/link';
import React from 'react';
import LoginGoogle from './LoginGoogle';
import LoginForm from './LoginForm';

function page() {
  return (
    <div className='m-auto max-w-2xl h-full -my-2 flex flex-col justify-center items-center'>
      <LoginGoogle />
      <h2 className='my-2'>Login</h2>
      <LoginForm />
      <Link href='/register'>Register</Link>
    </div>
  );
}

export default page;
