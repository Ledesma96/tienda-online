import { Inter } from "next/font/google";
import { Footer, NavBar } from "./components";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TAN Meringue",
  description: "Bienvenido a nuestra tienda online de ropa, donde la moda se encuentra con la calidad. Descubre las últimas tendencias en moda femenina, masculina y juvenil. Explora nuestras colecciones exclusivas, desde ropa casual hasta elegantes atuendos para cualquier ocasión. Ofrecemos precios accesibles, envíos rápidos y una experiencia de compra segura y cómoda. Renueva tu estilo con nuestras prendas y accesorios de moda. ¡Empieza a comprar hoy y luce lo mejor de cada temporada!",
  keywoeds: 'moda online, tienda de ropa, últimas tendencias, ropa femenina, ropa masculina, moda juvenil, colecciones exclusivas, ropa casual, atuendos elegantes, moda accesible, envíos rápidos, experiencia de compra segura, moda de temporada, accesorios de moda, ropa de calidad, tienda de moda, compra online, moda para todos, ropa para cualquier ocasión, estilo único, prendas modernas, looks de temporada, moda urbana, ropa cómoda, moda actual'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
