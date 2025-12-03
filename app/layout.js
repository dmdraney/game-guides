export const metadata = {
  title: 'Game Guides Hub',
  description: 'Interactive walkthroughs and guides for your favorite games',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}