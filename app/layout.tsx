import './globals.css'
import { Inter, Quicksand } from 'next/font/google'

const inter = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'SQL Formatter',
  description: 'App to format SQL querys of a beautiful way',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
