import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from "@/app/context/ToasterContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instant Menssenger',
  description: 'Authored by Ryan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToasterContext />
      {children}
      </body>
    </html>
  )
}
