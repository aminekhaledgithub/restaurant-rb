import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll'

export default function NavBar() {
    const logo = process.env.PUBLIC_URL + "/favicon.ico"
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="btn btn-primary navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#ffff' }} />
                </button>
                <div className="collapse navbar-collapse" id="collapseExample">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link smooth={true} to="home" className="nav-link "  offset={-110} aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="aboutme" className="nav-link" offset={-110} href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="services" className="nav-link" offset={-110} href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" className="nav-link" offset={-110} href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" className="nav-link" offset={-110} href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="testimonial" className="nav-link" offset={-110} href="#">Testimonial</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" className="nav-link" offset={-110} href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
