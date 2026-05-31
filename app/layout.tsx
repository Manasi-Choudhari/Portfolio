import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Manasi Choudhari — AI & ML Developer',
  description:
    'Personal portfolio of Manasi Choudhari — AI & ML Developer, B.Tech student at AISSMS IOIT Pune. Hackathon winner, IEEE author, computer vision enthusiast.',
  keywords: ['AI', 'ML', 'Machine Learning', 'Portfolio', 'Manasi Choudhari', 'Computer Vision', 'Deep Learning'],
  authors: [{ name: 'Manasi Choudhari' }],
  openGraph: {
    title: 'Manasi Choudhari — AI & ML Developer',
    description: 'Building intelligent systems that see, think, and act.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manasi Choudhari — AI & ML Developer',
    description: 'Building intelligent systems that see, think, and act.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body>{children}</body>
    </html>
  )
}
