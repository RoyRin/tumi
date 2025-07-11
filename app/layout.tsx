import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tumi Recreation',
  description: 'Premium Travel, Business and Lifestyle Accessories',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
