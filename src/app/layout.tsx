import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/app/components/ClientLayout' // 名前変更

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Physics & Math Study App',
  description: 'Interactive physics and mathematics simulations for learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}