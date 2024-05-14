import React from 'react'
import './Contact.css'
export default function Contact() {
  return (


    <section id="contact" className="bg-light py-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>Contactez-nous</h3>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus!</p>
                <form>
                    <div className="input-group input-group-lg mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Nom"/>
                    </div>

                    <div className="input-group input-group-lg mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Email"/>
                    </div>

                    <div className="input-group input-group-lg mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-pencil-alt"></i>
                            </span>
                        </div>
                        <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                    </div>

                    <input type="submit" value="Envoyer" className="btn btn-primary btn-block btn-lg"/>
                </form>
            </div>

        </div>
    </div>
</section>

  )}

