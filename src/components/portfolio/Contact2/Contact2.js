import React from 'react'
import './Contact2.css';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, handleSubmit, formState: { errors }, unregister } = useForm();
    // const form = useRef();
    const emailJsServiceId = "emailjs_service_contact";
    const emailJsTemplateId = "emailjs_template_contact";
    const emailJsPublicKey = "DN04BTc9ULBu96HPF";
    const sourceApplication = "resto-1-web";

    const onSubmit = (data, e) => {
        console.log(data);
        sendEmail(
            emailJsServiceId,
            emailJsTemplateId,
            {
                name: data.nom + ' ' + data.prenom,
                email: data.email,
                phone: data.phone,
                subject: data.demande,
                sourceapplication: sourceApplication
            },
            emailJsPublicKey
        )
        e.target.reset();
    };

    const sendEmail = (emailJsServiceId, emailJsTemplateId, variables) => {
        emailjs.send(emailJsServiceId, emailJsTemplateId, variables, emailJsPublicKey)
            .then(() => {
                const succesMessage = "Merci de m'avoir contacter, Je vous répond dans les plus bref délai";
                console.log(succesMessage);
            }).catch((error) => {
                const messageErreur = "Une erreur lors de l'envoi du message " + error;
                console.log(messageErreur);
            });
    };


    return (
        <section id="resto-contact">
            <h2 className="text-center">Réservation</h2>
            <div className="contact">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <div className="contact-detail">
                                <label htmlFor="nom" className="form-label">NOM</label>
                                <input type="text" className="form-control" name="nom"
                                    {...register("nom", { required: true })} />
                                {errors.nom && <p>This is required</p>}
                            </div>
                            <div className="contact-detail">
                                <label htmlFor="email" className="form-label">ADRESSE MAIL</label>
                                <input type="email" className="form-control" name="email"
                                    {...register("email", { required: true })} />
                                {errors.nom && <p>This is required</p>}
                            </div>
                            <div className="contact-detail">
                                <label htmlFor="nbrpers" className="form-label">NOMBRE DE PERSONNE</label>
                                <input type="number" className="form-control" name="nbrpers" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-detail">
                                <label htmlFor="prenom" className="form-label">PRENOM</label>
                                <input type="text" className="form-control" name="prenom"
                                    {...register("prenom", { required: true })} />
                                {errors.prenom && <p>This is required</p>}
                            </div>
                            <div className="contact-detail">
                                <label htmlFor="phone" className="form-label">TELEPHONE</label>
                                <input type="phone" className="form-control" name="phone"
                                    {...register("phone")} />
                            </div>
                            <div className="contact-detail">
                                <label htmlFor="dateresv" className="form-label">DATE</label>
                                <input type="date" className="form-control" name="dateresv"
                                    {...register("dateresv")} />
                                {errors.dateresv && <p>This is required</p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="contact-detail">
                                <label htmlFor="demande" className="form-label">DEMANDE PARTICULIERE</label>
                                <textarea name="demande" {...register("demande")}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="contact-detail">
                                <button onClick={() => unregister()}>
                                    Réserver
                                    <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-detail">
                                <button type="reset" onClick={() => unregister()}>
                                    Reset
                                    <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}
