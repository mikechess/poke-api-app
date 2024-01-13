import { Bangers, Lato } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: 'Pokemon Profiler',
  description: 'Search Pokemon by name and get their skills and abilities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${lato.variable}`}>
        <Header />
        <main className='container py-12'>
          {children}
        </main>
      </body>
    </html>
  )
}
