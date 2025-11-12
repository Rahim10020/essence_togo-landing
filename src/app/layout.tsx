import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EssenceTogo - Trouvez votre station-service au Togo',
  description: 'L\'application mobile pour trouver facilement les stations-service les plus proches au Togo. Disponible sur Android.',
  keywords: 'station-service, Togo, essence, carburant, Lomé, navigation, GPS',
  authors: [{ name: 'EssenceTogo' }],
  openGraph: {
    title: 'EssenceTogo - Votre guide des stations-service au Togo',
    description: 'Trouvez facilement les stations-service les plus proches',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}