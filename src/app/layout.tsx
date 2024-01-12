import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "./providers"
import Header from './ui/header/hader';
import Footer from './ui/footer/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Importación DIGITAL',
  description: 'Importación DIGITAL website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} bg-bg-primary text-slate-600 dark:text-white`}>
        <Providers>
          <main className='w-full h-max'>
            <div className='w-full h-max px-4'>
              <Header />
            </div>
            <div className='min-h-[calc(100vh-5rem)]'>
              {children}
            </div>
            <div>
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
