import type { Metadata } from "next";
import "../styles/globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import BackToTopButton from "@/components/Button/Backtotop";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "CodedBus",
  description: "CoodedBus",
  icons: {
    icon: "/assets/header.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <Box pt={"80px"}>{children}</Box>
        <BackToTopButton />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
