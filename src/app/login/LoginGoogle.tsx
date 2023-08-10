'use client';
import { Button } from '@/components/ui/button';
import { signInWithGoogle } from '@/firebase/auth/login';
import { useRouter } from 'next/navigation';
import React from 'react';

function LoginGoogle() {
  const router = useRouter();

  const onSignInGoogle = async (e: React.FormEvent) => {
    e.preventDefault();

    const { result, error } = await signInWithGoogle();

    if (error) return console.log(error);
    router.push('/');
  };

  return (
    <Button onClick={onSignInGoogle} className='my-2' variant='secondary'>
      Login with Google
    </Button>
  );
}

export default LoginGoogle;
