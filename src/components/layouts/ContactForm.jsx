import React, {useState} from "react";
import "../../App.css";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import NumberFormat from "react-number-format";
//import CheckIcon from "@material-ui/icons/Check";
//mport ReCAPTCHA from "react-google-recaptcha";

//import {Link} from "react-router-dom"; add <Link></Link> to sending msg

function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();


    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setSuccess(false);
      setLoading(true);

      setTimeout(()=>{
        setLoading(false);
        setSuccess(true);

      setTimeout(()=>{
          setSuccess(false);
      },2500)
      },1000)
  }

  const [isLoading, setLoading] = useState(false);

  const[isSuccess, setSuccess] = useState(false);

  
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
        <NumberFormat 
          format="+55 (##) ###-###-###" 
          placeholder="Telefone"
          name="contact_number"
          className="form-control"
          type="tel"
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
          
        >
        <i className="fas fa-paper-plane"> </i>
           Enviar
        </Button>
        }
        {isLoading &&
        <Button
          className="btn btn-outline-light text-uppercase mt-1 mb-1"
          disabled
        >
         <i className="fas fa-spinner fa-spin"></i> Enviando...
        </Button>
        }
        {isSuccess &&
        <Button
          className="text-uppercase mt-1 mb-1"
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
