import { Navegation } from "@/components/Navegation"
import { Footer } from "@/components/Footer"
import "@/styles/global.css"
import { Orbitron, Montserrat } from 'next/font/google';


const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Especifica los pesos que deseas usar
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
export const metadata = {
  title: "Porfolio",
  description: "Application generated from the Fake Store Api.",
  icons: {
    icon: "/Folder.png", // Ruta del favicon en la carpeta public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Navegation></Navegation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
