import React from 'react'
import './Footer.css'


export default function Footer() {
    return (
        <footer className="text-center p-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Tout Droits Réservés &copy;
                            <span id="year"></span> Lorem</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
