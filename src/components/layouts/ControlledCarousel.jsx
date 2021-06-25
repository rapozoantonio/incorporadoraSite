import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import Button from "react-bootstrap/Button";


//// IMPLEMENT OTHER SIZES IN PRODUCTION 
//import imgAboutS from "../../img/SOBRE_360X384.png";
//import imgAboutXS from "../../img/SOBRE_375X400.png";
//import imgAboutXXS from "../../img/SOBRE_393X510.png";
//import imgAboutXXXS from "../../img/SOBRE_412X521.png";
import imgAboutM from "../../img/SOBRE_412X535.png";
import imgAboutXM from "../../img/SOBRE_412X549.png";
//import imgAboutXXM from "../../img/SOBRE_1360X460.png";
//import imgAboutXXXM from "../../img/SOBRE_1366X460.png";
// imgAboutL from "../../img/SOBRE_1440X540.png";
//import imgAboutXL from "../../img/SOBRE_1536X518.png";
//import imgAboutXXL from "../../img/SOBRE_1600X540.png";
//import imgAboutXXXL from "../../img/SOBRE_1920X648.png";


//import imgPortXXXL_id1 from "../../img/Port-img/BAY_VIEW_1920X648.png";
//import imgPortXXL_id1 from "../../img/Port-img/BAY_VIEW_1600X540.png";
//import imgPortXL_id1 from "../../img/Port-img/BAY_VIEW_1536X518.png";
//import imgPortL_id1 from "../../img/Port-img/BAY_VIEW_1440X540.png";
//import imgPortXXXM_id1 from "../../img/Port-img/BAY_VIEW_1366X460.png";
//import imgPortXXM_id1 from "../../img/Port-img/BAY_VIEW_1360X460.png";
import imgPortXM_id1 from "../../img/Port-img/BAY_VIEW_412X549.png";
import imgPortM_id1 from "../../img/Port-img/BAY_VIEW_412X535.png";
//import imgPortXXXS_id1 from "../../img/Port-img/BAY_VIEW_412X521.png";
//import imgPortXXS_id1 from "../../img/Port-img/BAY_VIEW_393X510.png";
//import imgPortXS_id1 from "../../img/Port-img/BAY_VIEW_375X400.png";
//import imgPortS_id1 from "../../img/Port-img/BAY_VIEW_360X384.png";

//import imgPortXXXL_id3 from "../../img/Port-img/NOLE_1920X648.png";
//import imgPortXXL_id3 from "../../img/Port-img/NOLE_1600X540.png";
//import imgPortXL_id3 from "../../img/Port-img/NOLE_1536X518.png";
//import imgPortL_id3 from "../../img/Port-img/NOLE_1440X540.png";
//import imgPortXXXM_id3 from "../../img/Port-img/NOLE_1366X460.png";
//import imgPortXXM_id3 from "../../img/Port-img/NOLE_1360X460.png";
import imgPortXM_id3 from "../../img/Port-img/NOLE_412X549.png";
import imgPortM_id3 from "../../img/Port-img/NOLE_412X535.png";
//import imgPortXXXS_id3 from "../../img/Port-img/NOLE_412X521.png";
//import imgPortXXS_id3 from "../../img/Port-img/NOLE_393X510.png";
//import imgPortXS_id3 from "../../img/Port-img/NOLE_375X400.png";
//import imgPortS_id3 from "../../img/Port-img/NOLE_360X384.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="py-1"
      controls={true}
    >
      <Carousel.Item>
        <picture className="img w-100 img-carousel">
          <source media="(max-width: 412px)" srcSet={imgAboutXM} />
          <source media="(max-width: 412px)" srcSet={imgAboutM} />
          <img src={imgAboutXM} alt="About" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture className="img w-100 img-carousel">
          <source media="(max-width: 412px)" srcSet={imgPortXM_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortM_id1} />
          <img src={imgPortXM_id1} alt="Bay-View-Marau" />
        </picture>

        <Carousel.Caption>
          <Button
            variant="outline-light"
            href="/portfolio/bay-view-marau"
            size="lg"
            className="btn-opacity"
          >
            Saiba mais
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <picture className="img w-100 img-carousel">
          <source media="(max-width: 412px)" srcSet={imgPortXM_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortM_id3} />
          <img src={imgPortXM_id3} alt="Nole-Piratininga" />
        </picture>
        <Carousel.Caption>
          <Button
            variant="outline-light"
            href="/portfolio/no-le-piratininga"
            size="lg"
            className="btn-opacity"
          >
            Saiba mais
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
