import './Testimonial.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Testimonial() {

    const avatar1 = process.env.PUBLIC_URL + '/images/avatars/avatar-1.png';
    const avatar2 = process.env.PUBLIC_URL + '/images/avatars/avatar-2.png';
    const avatar3 = process.env.PUBLIC_URL + '/images/avatars/avatar-3.png';
    const avatar4 = process.env.PUBLIC_URL + '/images/avatars/avatar-4.png';
    const testimonial = process.env.PUBLIC_URL + '/images/testimonials-bg.jpg'
    return (
        <div className="testimonial" >
            <h1>Testimonial</h1>
            <div className="container">
                <div className="testimonial-content">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                    >
                        <>

                            <img src={avatar1} alt="" className="img-carousel" />
                            <div className="carousel">
                                <h3 className="img-title">am1</h3>
                                <p className="img-parg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia magni rerum nam numquam beatae sit. Illum consequuntur, eaque sit soluta animi veniam quia quisquam praesentium quam eum consectetur voluptates alias ratione officia. Error quae architecto est nam eaque optio omnis modi, cumque fugit laborum, corporis itaque incidunt nostrum dolore?</p>
                            </div>
                        </>
                        <>

                            <img src={avatar2} alt="" className="img-carousel" />
                            <div className="carousel">
                                <h3 className="img-title">am1</h3>
                                <p className="img-parg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia magni rerum nam numquam beatae sit. Illum consequuntur, eaque sit soluta animi veniam quia quisquam praesentium quam eum consectetur voluptates alias ratione officia. Error quae architecto est nam eaque optio omnis modi, cumque fugit laborum, corporis itaque incidunt nostrum dolore?</p>
                            </div>
                        </>
                        <>

                            <img src={avatar3} alt="" className="img-carousel" />
                            <div className="carousel">
                                <h3 className="img-title">am1</h3>
                                <p className="img-parg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia magni rerum nam numquam beatae sit. Illum consequuntur, eaque sit soluta animi veniam quia quisquam praesentium quam eum consectetur voluptates alias ratione officia. Error quae architecto est nam eaque optio omnis modi, cumque fugit laborum, corporis itaque incidunt nostrum dolore?</p>
                            </div>
                        </>
                        <>
                            <img src={avatar4} alt="" className="img-carousel" />
                            <div className="carousel">
                                <h3 className="img-title">am1</h3>
                                <p className="img-parg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia magni rerum nam numquam beatae sit. Illum consequuntur, eaque sit soluta animi veniam quia quisquam praesentium quam eum consectetur voluptates alias ratione officia. Error quae architecto est nam eaque optio omnis modi, cumque fugit laborum, corporis itaque incidunt nostrum dolore?</p>
                            </div>
                        </>
                    </Carousel >
                </div>
            </div>
        </div>
    )
}
