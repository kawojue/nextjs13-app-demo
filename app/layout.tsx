import Header from './Header'
import '../styles/globals.css'
export const metadata = {
  title: 'Next.js 13',
  description: 'Demo - Working with the appDir.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
