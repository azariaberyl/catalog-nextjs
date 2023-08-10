'use client';
import { User, getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Button } from '../button';
import { useRouter } from 'next/navigation';

function Logout({ user }: { user: User | null }) {
  const router = useRouter();

  const onClick = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.refresh();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  if (user)
    return (
      <Button onClick={() => onClick()} variant={'destructive'}>
        Logout
      </Button>
    );
}

export default Logout;
