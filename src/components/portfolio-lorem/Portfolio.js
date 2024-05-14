import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <section id="gallerie">
            <div className="container">
                <h2 className="text-center gallerie-photos">Nos Projets</h2>
                <p className="text-center">Nos Réalisations</p>

                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row  mb-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=251" data-bs-toggle="lightbox"
                                 className="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=251" className="img-fluid"  alt="eee" />
                            </a>
                            <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox"
                                data-gallery="example-gallery" className="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=252" className="img-fluid"  alt=""/>
                            </a>
                            <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox"
                                data-gallery="example-gallery" className="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid"  alt=""/>
                            </a>
                        </div>
                        <div className="row">
                            <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox"
                                data-gallery="example-gallery" className="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=254" className="img-fluid" alt="" />
                            </a>
                            <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox"
                                data-gallery="example-gallery" className="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=255" className="img-fluid"  alt=""/>
                            </a>
                            <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox"
                                data-gallery="example-gallery" className="col-sm-4">
                                <img src="https://unsplash.it/600.jpg?image=256" className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
