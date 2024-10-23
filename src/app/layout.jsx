import { Navegation } from "@/components/Navegation"
import { Footer } from "@/components/Footer"
import "@/styles/global.css"
import { Orbitron,Montserrat } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Especifica los pesos que deseas usar
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navegation></Navegation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
