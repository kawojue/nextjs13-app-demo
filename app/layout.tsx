import { Poppins } from 'next/font/google'
import Header from './Header'
import '../styles/globals.css'

export const metadata = {
  title: 'Next.js 13',
  description: 'Demo - Working with the appDir.',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
