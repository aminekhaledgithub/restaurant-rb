import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
    const imgAboutMe = process.env.PUBLIC_URL + '/images/testimonials-bg.jpg'
    return (
        <div id="aboutme" className="container py-5">
            {process.env.REACT_APP_MY_VAR}
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                        <img src={imgAboutMe} className="img-about-me" />
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, optio.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, ut nihil provident enim magnam harum soluta aperiam consequuntur tenetur odit in minus nobis doloremque cupiditate. Nesciunt nulla dolorum possimus eos fugit illum architecto veniam cupiditate voluptate eum soluta, officiis, rem debitis nemo. Consectetur molestias enim natus error consequatur sint quis quaerat eligendi esse praesentium reiciendis totam repudiandae doloribus accusantium sed cumque, tenetur harum debitis, sit laborum quod. Officiis rem deserunt nam, consequuntur repudiandae iste illum nemo inventore ad. Est accusantium facilis reprehenderit nemo amet dolores quidem repudiandae perferendis optio. Ipsa veritatis minus iste illum temporibus aut excepturi, numquam labore?
                    </p>
                </div>
            </div>
        </div>
    )
}
