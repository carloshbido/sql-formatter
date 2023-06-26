import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SQL Formatter',
  description: 'App to format SQL querys of a beautiful way',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"relative box-border " + inter.className}>
        <Nav/>
        {children}
        <div id="cookieportal" />
      </body>
    </html>
  )
}
