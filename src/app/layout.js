import Footer from '@/components/layout/Footer';
import '../assets/sass/style.sass'
import Header from "@/components/layout/Header";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
