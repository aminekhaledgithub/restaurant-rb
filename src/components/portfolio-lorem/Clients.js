import React from 'react'
import './Clients.css'
export default function Clients() {
  return (
    <section id="clients">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <a href="#">
                    <img src="img/spotify.jpg" alt="spotify"/>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <a href="#">
                    <img src="img/microsoft.jpg" alt="spotify"/>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <a href="#">
                    <img src="img/apple.jpg" alt="spotify"/>
                </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <a href="#">
                    <img src="img/google.jpg" alt="spotify"/>
                </a>
            </div>
        </div>
    </div>
</section>

  )
}
