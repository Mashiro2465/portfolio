import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const title = '김민석 | 백엔드 개발자'
const description =
  '데이터 자동화와 백엔드 개발 경험을 통해 실제 업무 효율을 개선한 개발자, 김민석의 포트폴리오입니다.'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-minseok.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://portfolio-minseok.vercel.app',
    siteName: '김민석 포트폴리오',
    images: ['/opengraph-image'],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--color-background] text-[--color-foreground]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
