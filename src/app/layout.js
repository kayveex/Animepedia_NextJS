import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Kebutuhan SEO
export const metadata = {
  title: "Animepedia 🙌",
  description: "Website Untuk Mencari Anime Favoritmu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Children nya itu adalah page.js */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
