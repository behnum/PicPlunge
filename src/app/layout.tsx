import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PicPlunge',
  description: 'Where Every Click is a Journey and Every Image is a Story.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <main className='max-w-6xl mx-auto'>{children}</main>
      </body>
    </html>
  )
}
