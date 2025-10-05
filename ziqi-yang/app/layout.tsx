import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ziqi Yang',
  description: 'PhD in Informatics / HCI / UX Research',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-4xl px-6 py-6 font-sans">
        {/* Navbar */}
        <nav className="mb-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Ziqi Yang
          </Link>
          <div className="space-x-6 text-sm text-gray-700">
            <Link href="/research">Research</Link>
            <Link href="/internship">Internship</Link>
            <Link href="/cv">CV</Link>
          </div>
        </nav>
        {children}
        <footer className="mt-16 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Ziqi Yang · Powered by Next.js + Tailwind
        </footer>
      </body>
    </html>
  )
}