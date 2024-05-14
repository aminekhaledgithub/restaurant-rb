import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFile, faFileCode } from '@fortawesome/free-solid-svg-icons'
import './Services.css'

export default function Services() {
    return (
        <div id="services" className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                            </div>
                            <h3>Web Design</h3>
                            <p>I approach projetc individually and always focus to result</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                            </div>
                            <h3>Web Developement</h3>
                            <p>You web site will be designed with the last proven techs</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
                            </div>
                            <h3>Facebook and Social Media marketing</h3>
                            <p>Your potential client will see your service and product on Facebook</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                            </div>
                            <h3>Googles Ads</h3>
                            <p>You service and product will appear at the top of searchs </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
