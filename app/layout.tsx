import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: "Miniso",
  description: "Note Manage App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
