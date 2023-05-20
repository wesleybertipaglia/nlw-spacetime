import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjure,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjure = BaiJamjure({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjure',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Uma capsula do tempo criada com Next.js, React, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjure.variable} bg-gray-900  font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
