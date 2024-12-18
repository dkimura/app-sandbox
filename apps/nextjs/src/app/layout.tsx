import '@mantine/core/styles.css'

import Providers from '@/providers/QueryClientProvider'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>

      <body>
        <Providers>
          <MantineProvider>{children}</MantineProvider>
        </Providers>
      </body>
    </html>
  )
}
