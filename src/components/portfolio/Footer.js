import React from 'react'
import './Footer.css';
import {
    FacebookIcon, FacebookMessengerShareButton,
    LinkedinIcon, LinkedinShareButton,
    RedditIcon, RedditShareButton,
    TwitterIcon, TwitterShareButton
} from 'react-share'
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>adresse à Casablanca</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:55555-555-55">+(212) 0505050505</a>
                        </div>
                        <div className="d-flex">
                            <p>Email : amine@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="footer-nav">Home</div>
                                <br />
                                <div className="footer-nav">About me</div>
                                <br />
                                <div className="footer-nav">Contact</div>
                            </div>
                            <div className="col">
                                <div className="footer-nav">Experience</div>
                                <br />
                                <div className="footer-nav">Portfolio</div>
                                <br />
                                <div className="footer-nav">Testimonial</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookMessengerShareButton url={""}>
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookMessengerShareButton>
                            <TwitterShareButton url={""}>
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton url={""}>
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <RedditShareButton url={""}>
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                        </div>
                    </div>
                    <div className="copyright">
                        <p className="pt-3 text-center">
                            {new Date().getFullYear()} New Horizon | All Rights reserved
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
