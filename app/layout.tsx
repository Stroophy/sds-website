import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stroophy Digital Services (SDS) - Melbourne Digital Infrastructure',
  description: 'Professional digital infrastructure solutions for Melbourne businesses. Specializing in Construction Tech, Web Development, and complete digital solutions.',
  keywords: ['digital infrastructure', 'construction tech', 'web development', 'Melbourne', 'digital agency', 'cloud solutions'],
  authors: [{ name: 'Stroophy Digital Services' }],
  creator: 'Stroophy Digital Services',
  publisher: 'Stroophy Digital Services',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://stroophydigital.vercel.app',
    title: 'Stroophy Digital Services (SDS)',
    description: 'Professional digital infrastructure solutions for Melbourne businesses',
    siteName: 'Stroophy Digital Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stroophy Digital Services (SDS)',
    description: 'Professional digital infrastructure solutions for Melbourne businesses',
    creator: '@stroophydigital',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}