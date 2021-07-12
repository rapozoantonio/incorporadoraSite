import React from "react";
import Media from "react-bootstrap/Media";
import { BsColumnsGap } from "react-icons/bs";
import { BsGeo } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";

function MediaList(portfolio) {
  return (
    <ul className="list-unstyled">
      <Media as="li">
        <FaGlassCheers size={30} className="orange" />
        <Media.Body>
          <h3>Características Únicas</h3>
          <p>{portfolio.uniqueFeat}</p>
        </Media.Body>
      </Media>

      <Media as="li">
        <BsGeo size={30} className="orange" />
        <Media.Body>
          <h3>Tipologia e Número de Unidades</h3>
          <p>
            {portfolio.nUnidades} unidades <br /> {portfolio.tipologia}
          </p>
        </Media.Body>
      </Media>
      <Media as="li">
        <BsColumnsGap size={25} className="orange" />
        <Media.Body>
          <h3>Área Privativa</h3>
          <p>{portfolio.areaPrivativa}</p>
        </Media.Body>
      </Media>
    </ul>
  );
}

export default MediaList;
