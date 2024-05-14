import React from 'react'
import Header from "./Header"
import Menu from "./Menu"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Resto() {
  return (
    <>
      <Header/>
      <Menu/>
      <section id="resto-concept">
        <div className="concept">
          Concept
        </div>
      </section>
      <section id="resto-equipe">
        <div className="equipe">
          Equipe
        </div>
      </section>
      <Contact/>
      <Footer/>
    </>
  )
}
