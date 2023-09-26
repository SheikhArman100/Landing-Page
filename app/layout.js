
import { Dancing_Script, Inter, Italiana } from 'next/font/google'
import './globals.css'

const dancingScript=Dancing_Script({
  subsets:["latin"],
  weight:"400",
  variable:"--font-dancingScript"
})
const italiana=Italiana({
  subsets:["latin"],
  weight:"400",
  variable:"--font-italiana"

})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${italiana.className}`}>
         
        {children}
      </body>
    </html>
  )
}
