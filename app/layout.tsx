
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'R Rohith - Full Stack Developer Portfolio',
  description: 'Passionate full-stack developer specializing in Web3, Blockchain, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} ${jetBrainsMono.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}