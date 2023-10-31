import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import calcuplator from '../../public/calcupLador2.png';
import { Github } from 'lucide-react';
import { Oswald } from 'next/font/google';
import History from '@/components/history/history';
import Link from 'next/link';
import icon from '../../public/calcuplator.ico';
const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'calCUPlador | Minimalista y de código abierto 📢 ',
  description:
    'App minimalista y de código abierto para conocer las tasas de cambio en Cuba y realizar conversiones',
  twitter: {
    card: 'summary_large_image',
    creator: '@proc4astinator',
    images: 'https://calcuplador.vercel.app/calcuplador.png'
  },
  icons: icon.src,
  openGraph: {
    type: 'website',
    url: 'https://calcuplador.vercel.app',
    title: 'calCUPlador | Minimalista y de código abierto 📢',
    description:
      'App minimalista y de código abierto para conocer las tasas de cambio en Cuba y realizar conversiones',
    siteName: 'calCUPlador',
    images: [
      {
        url: 'https://calcuplador.vercel.app/calcuplador.png'
      }
    ]
  }
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
            className='h-14 w-32 rounded-full'
          />
          <div className='flex space-x-2'>
            <Link
              target='
            _blank'
              rel='nofollow noreferer'
              href='https://github.com/cmollinea/calcuplator'
            >
              <Button className='w-fit font-light space-x-1 p-2'>
                <Github className='mx-0.5' size={16} /> Repo
              </Button>
            </Link>
            <History />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
