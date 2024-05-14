import React from 'react'
import './Contact1.css'

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function Contact() {

  const { register, handleSubmit, formState: { errors }, unregister } = useForm();

  // const form = useRef();
  const emailJsServiceId = "emailjs_service_contact";
  const emailJsTemplateId = "emailjs_template_contact";
  const emailJsPublicKey = "DN04BTc9ULBu96HPF";
  const sourceApplication = "portfolio-web";

  const onSubmit = (data, e) => {
    console.log(data);
    sendEmail(
      emailJsServiceId,
      emailJsTemplateId,
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.message,
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
    <div className="contact-container">
      <div className="container">

        <h1>Contact</h1>
        <p >
          Please fill in the contact information and describe your project needs , I will contact you as soon as possible
        </p>
        <p >
          {(errors.name || errors.email || errors.subject || errors.message) && <p>All field required</p>}
        </p>

      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input type="text" className="form-control" name="name" placeholder="Name"
                  {...register("name",{required:true})}
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input type="email" className="form-control" name="email" placeholder="Email"
                  {...register("email",{required:true})} />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input type="phone" className="form-control" name="phone" placeholder="Phone"
                  {...register("phone")} />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input type="text" className="form-control" name="subject" placeholder="Subject"
                  {...register("subject",{required:true})} />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea type="text" className="form-control" name="message" placeholder="Message/Description"
                  {...register("message",{required:true})} />
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <button className="contact-btn" type="submit" onClick={() => unregister()}>contact me</button>
          </div>
        </form>
      </div>
    </div>
  )
}
