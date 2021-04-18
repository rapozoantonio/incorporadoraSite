import React, {useState, Component} from "react";
import "../../App.css";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
//import CheckIcon from "@material-ui/icons/Check";
//mport ReCAPTCHA from "react-google-recaptcha";

//import {Link} from "react-router-dom"; add <Link></Link> to sending msg

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    const serviceID = "gmail";
    const templateID = "template_jykhh8e";
    const userID = "user_pACoYcBG2ky4dcTZhP6yQ";

    
    emailjs
      .sendForm(
        serviceID,
        templateID,
        e.target,
        userID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const [isLoading, setLoading] = useState(false);

  const[isSuccess, setSuccess] = useState(false);

  const sendForm = () => {
    
   
      setSuccess(false);
      setLoading(true);

      setTimeout(()=>{
        setLoading(false);
        setSuccess(true);

      setTimeout(()=>{
          setSuccess(false);
      },2500)
      },1000)

  };


    
  return (
    <div className="col-md-5 mb-3 mt-3 center">
      <h4>
        <strong>ENTRE EM CONTATO</strong>
      </h4>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="user_name"
            placeholder="Nome"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            name="contact_number"
            placeholder="Telefone para Contato"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="user_email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            cols="30"
            rows="3"
            placeholder="Mensagem"
          />
        </div>
        {!isLoading && !isSuccess &&
        <Button
          className="btn btn-outline-light text-uppercase mt-1 mb-1"
          type="submit"
          onClick={sendForm}
        >
        <i className="fas fa-paper-plane"> </i>
           Enviar
        </Button>
        }
        {isLoading &&
        <Button
          className="btn btn-outline-light text-uppercase mt-1 mb-1"
          type="submit"
          disabled
        >
         <i className="fas fa-spinner fa-spin"></i> Enviando...
        </Button>
        }
        {isSuccess &&
        <Button
          className="text-uppercase mt-1 mb-1"
          type="submit"
          variant="success"
          disabled
        
        >
         <i className="fas fa-check"></i> Enviado!
        </Button>
        }
      </form>
    </div>
  );
}

export default ContactForm;
