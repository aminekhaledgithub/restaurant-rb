import Apropos from "./Apropos"
import Projet from "./Projet"
import Banniere from "./Banniere"
import Portfolio from "./Portfolio";
import Carousel from "./Carousel"
import Cartes from "./Cartes"
import Progress from "./Progress"
import Clients from "./Clients"
import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar";

export default function PortfolioLorem() {
  return (
    <>
      <Navbar/>
      <Apropos />
      <Projet />
      <Banniere />
      <Portfolio />
      <Carousel />
      <Cartes />
      <Progress />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}
