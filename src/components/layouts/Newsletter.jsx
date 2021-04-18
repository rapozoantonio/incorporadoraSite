import React, { useState} from "react";
import "../../App.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

//import {Link} from "react-router-dom"; add <Link></Link> to sending msg

function Newsletter() {
  const [isLoading, setLoading] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  const subscribe = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <InputGroup className="mt-5 mb-5 ml-3">
      {isExpanded && (
        <FormControl
          className="ml-4"
          placeholder="Receba novidades! [nome]"
          aria-label="Recipient's email"
          aria-describedby="basic-addon2"
          name="subscribe_name"
        />
      )}
      <FormControl
        className="ml-4"
        placeholder="Receba novidades! [e-mail]"
        aria-label="Recipient's name"
        aria-describedby="basic-addon2"
        name="subscribe_email"
        type="email"
        onClick={expand}
      />
      <InputGroup.Append>
        {!isLoading && (
          <Button
            className="btn mr-5 text-uppercase"
            type="submit"
            onClick={subscribe}
          >
            <i class="fas fa-envelope-open-text"></i> Inscrever
          </Button>
        )}
      </InputGroup.Append>
      <InputGroup.Append>
        {isLoading && (
          <Button
            className="btn mr-5 text-uppercase"
            type="submit"
            variant="light"
            disabled
          >
            <i className="fas fa-envelope"></i> Inscrito
          </Button>
        )}
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Newsletter;
