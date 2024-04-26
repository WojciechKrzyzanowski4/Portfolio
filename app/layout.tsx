import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wojciech Krzyzanowski',
  description: 'Wojciech is a full-stack delveloper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`&(inter.className) c text-gray-950 relative p-6`}>
       
          
          <Header/>
          {children}
          <Footer/>
          
          
      
       </body>
    </html>
  )
}
