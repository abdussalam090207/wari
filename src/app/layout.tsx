import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import AnimationProvider from '@/components/providers/AnimationProvider'
import ScrollProgress from '@/components/layout/ScrollProgress'

export const metadata: Metadata = {
  title: 'WARI - Wayang Lestari | Melestarikan Budaya, Menyelamatkan Bumi',
  description: 'WARI (Wayang Lestari) adalah inisiatif eco-cultural yang mengubah limbah plastik menjadi wayang kulit tradisional dari SMKN 26 Jakarta',
  keywords: ['wayang', 'daur ulang', 'plastik', 'budaya', 'lingkungan', 'SMKN 26 Jakarta'],
  authors: [{ name: 'WARI Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
