import { FirebaseUserContextProvider } from '@/context/UserContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='w-full h-full' lang='en'>
      <body className={`${inter.className} w-full h-full`}>
        <FirebaseUserContextProvider>{children}</FirebaseUserContextProvider>
      </body>
    </html>
  );
}
