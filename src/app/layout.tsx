// src/app/layout.tsx
"use client";

import localFont from "next/font/local";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import "./globals.css";

const theme = extendTheme({});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider theme={theme}>
        <Box bg="#4166F5" minH="100vh" color="white">
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
