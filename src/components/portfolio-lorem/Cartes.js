import React from 'react'
import './Cartes.css'


export default function Cartes() {
    return (
        <section id="cards-section"> 
            <h2 className="text-center">Nos Offres</h2>
            <div id="cards" className="container">
                <div className="row">

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h2><span id="spanPrix">9.99 €</span> / mois</h2>
                                <div className="price">
                                    <h2>Amateur</h2>
                                </div>
                            </div>
                            <div className="details">2G Bande Passante</div>
                            <div className="details">150GB de stockage</div>
                            <div className="details">5 Profils</div>
                            <div className="details">3 Noms de Domaine</div>
                            <div id="card-btn"><a href="#">S'inscrire</a></div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h2><span id="spanPrix">79.99 €</span> / mois</h2>

                                <div className="price">
                                    <h2>Professionel</h2>
                                </div>

                            </div>

                            <div className="details">4G Bande Passante</div>
                            <div className="details">850GB de stockage</div>
                            <div className="details">15 Profils</div>
                            <div className="details">10 Noms de Domaine</div>
                            <div id="card-btn"><a href="#">S'inscrire</a></div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h2><span id="spanPrix">400 €</span> / mois</h2>


                                <div className="price">
                                    <h2>Expert</h2>
                                </div>

                            </div>

                            <div className="details">10G Bande Passante</div>
                            <div className="details">2050GB de stockage</div>
                            <div className="details">80 Profils</div>
                            <div className="details">100 Noms de Domaine</div>
                            <div id="card-btn"><a href="#">S'inscrire</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
