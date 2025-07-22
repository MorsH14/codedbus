import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/Button/Backtotop';
import { Box } from '@mui/material';
import TrackInit from '@/components/TrackInit';
import Script from 'next/script'; // 👈 Import Script for gtag
import CookieConsentBanner from '@/components/CookieConsent.tsx';

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
     <head>
        {/* Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MLV8CFJPH2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MLV8CFJPH2');
            console.log('✅ Google Analytics script initialized');
          `}
        </Script>
      </head>
      <body>
        <TrackInit />
        <CookieConsentBanner />
        <Header />
        <Box pt={'80px'}>{children}</Box>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
