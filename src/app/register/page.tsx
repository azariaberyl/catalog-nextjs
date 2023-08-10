'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import signUp from '@/firebase/auth/register';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) return console.log(error);
    router.push('/');
  };
  return (
    <div className='m-auto max-w-2xl h-full flex flex-col justify-center items-center'>
      <Button className='my-2' variant='secondary'>
        Login with Google
      </Button>
      <h2 className='my-2'>Register</h2>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col my-1 gap-1'>
          <label htmlFor='email'>Email</label>
          <Input id='email' type='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='flex flex-col gap-1 my-1'>
          <label htmlFor='password'>Password</label>
          <Input
            id='password'
            name='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default page;
