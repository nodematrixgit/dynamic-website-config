import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Token Launch',
  description: 'Dynamic token website powered by NodeMatrix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

