import React from "react";
import Media from "react-bootstrap/Media";
import { BsColumnsGap } from "react-icons/bs";
import { BsGeo } from "react-icons/bs";
import {FaGlassCheers} from "react-icons/fa";

function MediaList(props) {
  return (
    <ul className="list-unstyled">
      <Media as="li">
        <FaGlassCheers size={30} className="orange"/>
        <Media.Body>
          <h3>Espaço de Lazer</h3>
          <p>{props.uniqueFeat}</p>
        </Media.Body>
      </Media>

      <Media as="li">
      <BsGeo size={30} className="orange"/>
        <Media.Body>
          <h3>Unidades:</h3>
          <p>{props.nUnidades}</p>
        </Media.Body>
      </Media>
      <Media as="li">
      <BsColumnsGap size={25} className="orange"/>
        <Media.Body>
          <h3>Área Total: {props.areaTotal}</h3>
          <p>{props.tipologia}</p>
        </Media.Body>
      </Media>
    </ul>
  );
}

export default MediaList;
  


