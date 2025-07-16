import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/Button/Backtotop';
import { Box } from '@mui/material';
import TrackInit from '@/components/TrackInit'; // 👈 Import
import CookieConsent from '@/components/CookieConsent.tsx';

export const metadata: Metadata = {
  title: 'CodedBus',
  description: 'CodedBus',
  icons: {
    icon: '/assets/header.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TrackInit /> {/* 👈 Executes tracking and sets cookie */}
        <CookieConsent />
        <Header />
        <Box pt={'80px'}>{children}</Box>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
