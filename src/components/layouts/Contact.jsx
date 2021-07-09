import React from "react";
import "../../App.css";
import ContactForm from "./ContactForm.jsx";

//import {Link} from "react-router-dom"; add <Link></Link> to sending msg

function Contact() {
  return (
    <div className="" id="fale-conosco">
      <div className="mt-3 ml-5 mr-4">
        <div className="well well-sm">
          <h2>NOSSA LOCALIZAÇÃO</h2>
          <div className="row">
            <div className="col-md-7 mt-3">
              <iframe
                title="falvesLocation"
                src="https://www.google.com/maps/d/u/1/embed?mid=11PG2H6Eydp1Km3oBE2N9ZwGmkX4O1hUX"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
                allowFullScreen
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
