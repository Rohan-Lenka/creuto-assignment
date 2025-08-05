import "./globals.css";
import styles from "./home.module.css"

import { Bricolage_Grotesque } from 'next/font/google'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Choose weights you need
  variable: '--font-bricolage'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolageGrotesque.variable}>
      <body className={bricolageGrotesque.className}>
        {children}
      </body>
    </html>
  );
}
