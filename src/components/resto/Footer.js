import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import './Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <section id="resto-footer">
            <div className="footer-text">
                © L'ORIGINAL 2024.   ALL RIGHTS RESERVED.
                <span className="footer-span" ><FontAwesomeIcon icon={faPaperPlane} /></span>
            </div>
            <div>

                <Link to={"/portfolio"}>
                    <h1>PORTFOLIO</h1>
                </Link>
                <Link to={"/portfoliolorem"}>
                    <p>PORTFOLIO LOREM</p>
                </Link>
            </div>
        </section>
    )
}
