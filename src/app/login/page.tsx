'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import signIn, { signInWithGoogle } from '@/firebase/auth/login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) return console.log(error);
    router.push('/');
  };

  const onSignInGoogle = async (e: React.FormEvent) => {
    e.preventDefault();

    const { result, error } = await signInWithGoogle();

    if (error) return console.log(error);
    router.push('/');
  };

  return (
    <div className='m-auto max-w-2xl h-full -my-2 flex flex-col justify-center items-center'>
      <Button onClick={onSignInGoogle} className='my-2' variant='secondary'>
        Login with Google
      </Button>
      <h2 className='my-2'>Login</h2>
      <form onSubmit={onSignIn}>
        <div className='flex flex-col my-1 gap-1'>
          <label htmlFor='email'>Email</label>
          <Input onChange={(e) => setEmail(e.target.value)} value={email} id='email' type='email' name='email' />
        </div>
        <div className='flex flex-col gap-1 my-1'>
          <label htmlFor='password'>Password</label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='password'
            name='password'
            type='password'
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
      <Link href='/register'>Register</Link>
    </div>
  );
}

export default page;
