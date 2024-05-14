import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    const mern = process.env.PUBLIC_URL+'/images/mern-blog.png';
    const netflix = process.env.PUBLIC_URL+'/images/netflix.png';
    const portfolio = process.env.PUBLIC_URL+'/images/portfolio.png';
    const task = process.env.PUBLIC_URL+'/images/task-manager.png';
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">

                <h1 className="text-center text-uppercase">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img src={mern} alt="" className="portfolio-img" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box">
                        <img src={netflix} alt="" className="portfolio-img" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box">
                        <img src={portfolio} alt="" className="portfolio-img" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box">
                        <img src={task} alt="" className="portfolio-img" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}