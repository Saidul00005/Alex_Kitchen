import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import NavigationBar from "./components/Navbar";
import FooterPart from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Kitchen",
  description: "Kitchen for your favourite food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <header>
            <NavigationBar />
          </header>
          <main className="">{children}</main>
          <FooterPart />
        </Providers>
      </body>
    </html>
  );
}
