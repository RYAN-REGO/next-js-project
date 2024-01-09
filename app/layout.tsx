
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs'

export const metadata : Metadata = {
  title : "This is my first next App",
  description : "Just Learning!"
}

const poppins = Poppins({
  subsets : ['latin'],
  weight : ['400', '500', '600', '700'],
  variable : '--font-poppins',
})


export default function RootLayout({children} : {children : React.ReactNode}) {
  return (
    <ClerkProvider>
    <html lang='en'>
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
