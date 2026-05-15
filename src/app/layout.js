import Providers from "@/components/Providers";

import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";
import { icons } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Harshvardhan Shah",
  description: "AI Engineer Portfolio",

  icons:{
    icon:"/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#0B0F19] text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
