import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CarouselFirstImg from "../../img/CAPA_1.png"
import CarouselSecondImg from "../../img/CAPA_2.png"
import CarouselThirdImg from "../../img/CAPA_3.png"
import Button from "react-bootstrap/Button";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="py-1" controls="true">
      <Carousel.Item>
        <img
          className="img d-block w-100"
          src={CarouselFirstImg}
          alt="Falves Logo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img d-block w-100"
          src={CarouselSecondImg}
          alt="Bay View Maraú"
        />
        <Carousel.Caption>
        <Button
            href="/portfolio/bay-view-marau"
            size="lg"
            className="btn-opacity"
            
          >
            Saiba mais
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img d-block w-100"
          src={CarouselThirdImg}
          alt="Nole Piratininga"
          
        />
        <Carousel.Caption>
        <Button
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