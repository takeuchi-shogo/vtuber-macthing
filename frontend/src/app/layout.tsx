import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter, Zen_Kaku_Gothic_New } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { HeroUIProvider } from '@/providers/heroui-provider'
import { Header, Footer } from '@/components/layout'
import { PageTransition } from '@/components/animation/page-transition'
import { LoadingScreen } from '@/components/effects/loading-screen'
import { Scanlines } from '@/components/effects/scanlines'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-zen-kaku',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ホロライブVtuber診断',
  description: 'あなたにぴったりのホロライブメンバーを見つけよう！',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${inter.variable} ${zenKaku.variable} antialiased`}
      >
        <LoadingScreen />
        <Scanlines intensity="subtle">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <HeroUIProvider>
              <Header />
              <main className="min-h-screen">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </HeroUIProvider>
          </ThemeProvider>
        </Scanlines>
      </body>
    </html>
  )
}
