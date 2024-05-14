import React from 'react'
import './Carousel.css'


export default function Carousel() {
    return (
        <section id="carousel-text" className="py-2">
            <div className="container">
                <div id="carouselContent" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active text-center p-4">
                            <p className="font-italic">Lorem 1 ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="carousel-item text-center p-4">
                            <p className="font-italic">Lorem 2 ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
