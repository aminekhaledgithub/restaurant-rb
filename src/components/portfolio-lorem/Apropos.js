import React from 'react';
import './Apropos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Apropos() {
    return (

        <section id="apropos">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>A propos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id aut nemo praesentium quia quos,
                            accusantium fugit tempora quas vel consectetur, consequatur laborum asperiores ipsam incidunt
                            impedit quis cum natus.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            &nbsp;Les détails
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim3 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                        brunch.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            &nbsp; Encore des détails
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                        brunch.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            &nbsp;Plus de détails
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim1 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non-bs cupidatat skateboard dolor
                                        brunch.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
