import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

function page() {
  return (
    <div className='m-auto max-w-2xl h-full flex flex-col justify-center items-center'>
      <Button className='my-2' variant='secondary'>
        Login with Google
      </Button>
      <h2 className='my-2'>Register</h2>
      <form>
        <div className='flex flex-col my-1 gap-1'>
          <label htmlFor='email'>Email</label>
          <Input id='email' type='email' name='email' />
        </div>
        <div className='flex flex-col gap-1 my-1'>
          <label htmlFor='password'>Password</label>
          <Input id='password' name='password' type='password' />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

export default page;
