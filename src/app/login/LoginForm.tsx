'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import signIn from '@/firebase/auth/login';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) return console.log(error);
    router.push('/');
  };

  return (
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
  );
}

export default LoginForm;
