import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import calcuplator from '../../public/calcupLador.jpg';
import { Github, HistoryIcon } from 'lucide-react';
import { Oswald } from 'next/font/google';
import History from '@/components/history/history';
const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'calCUPlador | Minimalista y de código abierto 📢 ',
  description:
    'App minimalista y de código abierto para conocer las tasas de cambio y realizar conversiones'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`dark bg-background text-foreground ${oswald.className}`}
    >
      <body>
        {' '}
        <header className='h-16 border-b rounded-b-xl border-b-foreground/20 sticky top-0 z-40 flex items-center justify-between px-4 bg-background'>
          {' '}
          <Image
            src={calcuplator.src}
            height={calcuplator.height}
            width={calcuplator.width}
            alt='calcuplator logo'
            className='h-14 w-14 rounded-full'
          />
          <div className='flex space-x-2'>
            <Button className=' w-fit font-light space-x-1 p-2'>
              <Github className='mx-0.5' size={16} /> Repo
            </Button>
            <History />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
