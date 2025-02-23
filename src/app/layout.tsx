import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InvestAI - Your Intelligent Financial Companion',
  description: 'AI-powered investment planning and advice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )
}

