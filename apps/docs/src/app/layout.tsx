import { ReactNode } from 'react'

import '@/styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body>
        <div className='w-full dark:bg-[#0f172a]'>{children}</div>
      </body>
    </html>
  )
}
