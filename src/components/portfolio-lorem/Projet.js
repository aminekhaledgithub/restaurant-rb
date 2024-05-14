import React from 'react'
import './Projet.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArchway, faAtom, faMobileAndroid } from "@fortawesome/free-solid-svg-icons"

export default function Projet() {
    return (

        <section id="icones">
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                    <h2><FontAwesomeIcon icon={faMobileAndroid}/>&nbsp;Android</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo laudantium quidem hic alias iusto
                        optio ipsa, cupiditate placeat nulla! Similique assumenda reprehenderit quo quia ducimus.</p>
                </div>
                <div className="col-md-4">
                    <h2><FontAwesomeIcon icon={faArchway}/>&nbsp;Boutique</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo laudantium quidem hic alias iusto
                        optio ipsa, cupiditate placeat nulla! Similique assumenda reprehenderit quo quia ducimus.</p>
                </div>
                <div className="col-md-4">
                    <h2><FontAwesomeIcon icon={faAtom}/>&nbsp;Tech</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo laudantium quidem hic alias iusto
                        optio ipsa, cupiditate placeat nulla! Similique assumenda reprehenderit quo quia ducimus.</p>
                </div>
            </div>
        </div>
    </section>


        )
}