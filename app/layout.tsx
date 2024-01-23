import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Car Care',
  description: 'Car Care Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <div >
          <Footer />
        </div>
        
      </body>
    </html>
  )
}
