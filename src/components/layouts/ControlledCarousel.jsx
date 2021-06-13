import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import imgAboutS from "../../img/SOBRE_360X384.png";
import imgAboutXS from "../../img/SOBRE_375X400.png";
import imgAboutXXS from "../../img/SOBRE_393X510.png";
import imgAboutXXXS from "../../img/SOBRE_412X521.png";
import imgAboutM from "../../img/SOBRE_412X535.png";
import imgAboutXM from "../../img/SOBRE_412X549.png";
import imgAboutXXM from "../../img/SOBRE_1360X460.png";
import imgAboutXXXM from "../../img/SOBRE_1366X460.png";
import imgAboutL from "../../img/SOBRE_1440X540.png";
import imgAboutXL from "../../img/SOBRE_1536X518.png";
import imgAboutXXL from "../../img/SOBRE_1600X540.png";
import imgAboutXXXL from "../../img/SOBRE_1920X648.png";
import imgAbout4XL from "../../img/SOBRE_1538x958.png";

import imgPortXXXL_id1 from "../../img/Port-img/BAY_VIEW_1920X648.png";
import imgPortXXL_id1 from "../../img/Port-img/BAY_VIEW_1600X540.png";
import imgPortXL_id1 from "../../img/Port-img/BAY_VIEW_1536X518.png";
import imgPortL_id1 from "../../img/Port-img/BAY_VIEW_1440X540.png";
import imgPortXXXM_id1 from "../../img/Port-img/BAY_VIEW_1366X460.png";
import imgPortXXM_id1 from "../../img/Port-img/BAY_VIEW_1360X460.png";
import imgPortXM_id1 from "../../img/Port-img/BAY_VIEW_412X549.png";
import imgPortM_id1 from "../../img/Port-img/BAY_VIEW_412X535.png";
import imgPortXXXS_id1 from "../../img/Port-img/BAY_VIEW_412X521.png";
import imgPortXXS_id1 from "../../img/Port-img/BAY_VIEW_393X510.png";
import imgPortXS_id1 from "../../img/Port-img/BAY_VIEW_375X400.png";
import imgPortS_id1 from "../../img/Port-img/BAY_VIEW_360X384.png";

import imgPortXXXL_id3 from "../../img/Port-img/NOLE_1920X648.png";
import imgPortXXL_id3 from "../../img/Port-img/NOLE_1600X540.png";
import imgPortXL_id3 from "../../img/Port-img/NOLE_1536X518.png";
import imgPortL_id3 from "../../img/Port-img/NOLE_1440X540.png";
import imgPortXXXM_id3 from "../../img/Port-img/NOLE_1366X460.png";
import imgPortXXM_id3 from "../../img/Port-img/NOLE_1360X460.png";
import imgPortXM_id3 from "../../img/Port-img/NOLE_412X549.png";
import imgPortM_id3 from "../../img/Port-img/NOLE_412X535.png";
import imgPortXXXS_id3 from "../../img/Port-img/NOLE_412X521.png";
import imgPortXXS_id3 from "../../img/Port-img/NOLE_393X510.png";
import imgPortXS_id3 from "../../img/Port-img/NOLE_375X400.png";
import imgPortS_id3 from "../../img/Port-img/NOLE_360X384.png";

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
          <source media="(max-width: 360px)" srcSet={imgAboutS} />
          <source media="(max-width: 375px)" srcSet={imgAboutXS} />
          <source media="(max-width: 393px)" srcSet={imgAboutXXS} />
          <source media="(max-width: 412px)" srcSet={imgAboutXXXS} />
          <source media="(max-width: 412px)" srcSet={imgAboutM} />
          <source media="(max-width: 412px)" srcSet={imgAboutXM} />
          <source media="(max-width: 1360px)" srcSet={imgAboutXXM} />
          <source media="(max-width: 1366px)" srcSet={imgAboutXXXM} />
          <source media="(max-width: 1440px)" srcSet={imgAboutL} />
          <source media="(max-width: 1536px)" srcSet={imgAboutXL} />
          <source media="(max-width: 1600px)" srcSet={imgAboutXXL} />
          <source media="(max-width: 1920px)" srcSet={imgAboutXXXL} />
          <source media="(max-width: 2560px)" srcSet={imgAbout4XL} />
          <img src={imgAbout4XL} alt="About" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture className="img w-100 img-carousel">
          <source media="(max-width: 360px)" srcSet={imgPortS_id1} />
          <source media="(max-width: 375px)" srcSet={imgPortXS_id1} />
          <source media="(max-width: 393px)" srcSet={imgPortXXS_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortXXXS_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortM_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortXM_id1} />
          <source media="(max-width: 1360px)" srcSet={imgPortXXM_id1} />
          <source media="(max-width: 1366px)" srcSet={imgPortXXXM_id1} />
          <source media="(max-width: 1440px)" srcSet={imgPortL_id1} />
          <source media="(max-width: 1536px)" srcSet={imgPortXL_id1} />
          <source media="(max-width: 1600px)" srcSet={imgPortXXL_id1} />
          <source media="(max-width: 1920px)" srcSet={imgPortXXXL_id1} />
          <img src={imgPortXXXL_id1} alt="Bay-View-Marau" />
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
          <source media="(max-width: 360px)" srcSet={imgPortS_id3} />
          <source media="(max-width: 375px)" srcSet={imgPortXS_id3} />
          <source media="(max-width: 393px)" srcSet={imgPortXXS_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortXXXS_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortM_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortXM_id3} />
          <source media="(max-width: 1360px)" srcSet={imgPortXXM_id3} />
          <source media="(max-width: 1366px)" srcSet={imgPortXXXM_id3} />
          <source media="(max-width: 1440px)" srcSet={imgPortL_id3} />
          <source media="(max-width: 1536px)" srcSet={imgPortXL_id3} />
          <source media="(max-width: 1600px)" srcSet={imgPortXXL_id3} />
          <source media="(max-width: 1920px)" srcSet={imgPortXXXL_id3} />
          <img src={imgPortXXXL_id3} alt="Nole-Piratininga" />
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
