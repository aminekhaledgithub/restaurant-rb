import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <header id="top">

                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="main-nav">
                    <div className="container">
                        <a href="" className="navbar-brand">Lorem</a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarcollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item mr-1">
                                    <a href="#top" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#apropos" className="nav-link">Concept</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#gallerie" className="nav-link">Nos projets</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#cards-section" className="nav-link">Tarifs</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="text-intro">
                    <div className="pretxt">
                        Vos idées , notre projets
                    </div>
                    <h1>Agence Lorem</h1>

                    <a href="#" className="btn btn-dark ms-3">En Savoir plus</a>
                    <a href="#" className="btn btn-outline-dark ms-3">Nos projets</a>
                </div>


            </header>
        </>
    )
}