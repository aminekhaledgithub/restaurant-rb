
import Header from './Header';
import AboutMe from './AboutMe';
import Services from './Services';
import Experience from './Experience';
import Portfolio from './Portfolio'
import Testimonial from './Testimonial';
import Contact1 from './Contact1/Contact1';
import Contact2 from './Contact2/Contact2';
import Footer from './Footer';
import NavBar from "./NavBar";

export default function PortfolioProject() {
  return (
    <>
      <NavBar/>
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact1 />
      <Contact2 />
      <Footer />
    </>
  )
}
