import { Bebas_Neue, Raleway, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'

const display = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
})

const body = Raleway({
  subsets: ['latin'],
  variable: '--font-body',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Asad Dev — Web Developer',
  description: 'Portfolio of Asad Dev, a passionate Web Developer specializing in Next.js, Tailwind CSS, and modern JavaScript.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-dark text-white font-body overflow-x-hidden">
      
        <CustomCursor> </CustomCursor>
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
       
      </body>
    </html>
  )
}