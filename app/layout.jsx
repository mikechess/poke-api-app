import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon Profiler',
  description: 'Search Pokemon by name and get their skills and abilities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='container py-12'>
          {children}
        </main>
      </body>
    </html>
  )
}
