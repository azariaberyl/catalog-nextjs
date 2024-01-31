import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { CircleUser } from 'lucide-react';
import Logout from './auth/logout';
import Link from 'next/link';

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' data-test='profile-dropdown'>
          Profile <CircleUser className='ml-2 antialiased' strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-test='profile-dropdown-content' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/profile'>Profile</Link>
        </DropdownMenuItem>
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
