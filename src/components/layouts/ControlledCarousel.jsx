import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";


//// IMPLEMENT OTHER SIZES IN PRODUCTION 
const imgAboutS = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_360X384.png?alt=media&token=22529eba-cb68-421b-be26-114b464c5be9";
const imgAboutXS = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_375X400.png?alt=media&token=ed2fde72-e3e6-450a-9988-6724938ed251";
const imgAboutXXS = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_393X510.png?alt=media&token=c6066662-2a8d-40f9-836a-1f43dbb0d20a";
const imgAboutXXXS = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_412X521.png?alt=media&token=12d5d186-fb59-4b00-8f63-62f86322b418";
const imgAboutM = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_412X535.png?alt=media&token=5591e3e5-4ad5-439e-b5f5-07118b7bad8f";
const imgAboutXM = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_412X549.png?alt=media&token=3bdd12a4-a316-4843-ae4e-95abb0e3d4be";
const imgAboutXXM = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_1360X460.png?alt=media&token=a4697643-9b63-44de-a658-c0b6df7f345f";
const imgAboutXXXM = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_1366X460.png?alt=media&token=5a761c9d-e115-445e-bb50-64fb22f4054b";
const imgAboutL = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_1440X540.png?alt=media&token=a62536e9-b333-482b-8fef-42cf59919d1b";
const imgAboutXL = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_1536X518.png?alt=media&token=59cb3458-48f2-48af-9d97-6e83eeb954a2";
const imgAboutXXL = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_1600X540.png?alt=media&token=a910edf9-78a6-461e-b9b4-bcd7d44ecca4";
const imgAboutXXXL = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/SOBRE_1920X648.png?alt=media&token=d53a58ee-52ed-4153-939c-ac6f450c9f9a";

const imgPortXXXL_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_1920X648.png?alt=media&token=6e25bcfd-4519-43df-84de-08d8d72307be";
const imgPortXXL_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_1600X540.png?alt=media&token=07dad74f-7c23-4058-bc3d-cb2ba7cf5969";
const imgPortXL_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_1536X518.png?alt=media&token=5f8fd1ef-a235-419b-8719-8777f208e426";
const imgPortL_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_1440X540.png?alt=media&token=ea05cc9a-f72e-423b-821c-42994cac5a7a";
const imgPortXXXM_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_1360X460.png?alt=media&token=8f3389ab-8e1d-472e-b4be-ca15895fa89e";
const imgPortXXM_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_1360X460.png?alt=media&token=8f3389ab-8e1d-472e-b4be-ca15895fa89e";
const imgPortXM_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_412X549.png?alt=media&token=3bd10538-6f97-4ef9-9f8f-74b4240fa096";
const imgPortM_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_412X535.png?alt=media&token=48f3a524-6f96-40c1-8044-9c2528c288d2";
const imgPortXXXS_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_412X521.png?alt=media&token=104f88af-6a8e-4b3c-9355-8a30af6699ec";
const imgPortXXS_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_393X510.png?alt=media&token=79f0a497-96d6-4e11-9547-d163d17f9381";
const imgPortXS_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_375X400.png?alt=media&token=fcb88e5f-0145-40f3-aca5-bcc3ace271c2";
const imgPortS_id1 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/BAY_VIEW_360X384.png?alt=media&token=b2b69413-f9d8-4aea-840d-79fea433ab9a";

const imgPortXXXL_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_1920X648.png?alt=media&token=78b2ca93-fc39-437f-8553-9bbd4116d917";
const imgPortXXL_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_1600X540.png?alt=media&token=c2eec81f-d9b2-476d-bc68-b4538f5da282";
const imgPortXL_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_1536X518.png?alt=media&token=a14fc17c-f444-4236-8dd1-a4099287d28f";
const imgPortL_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_1440X540.png?alt=media&token=45448d14-0602-4dd5-9b79-3aa22cbb0dd0";
const imgPortXXXM_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_1366X460.png?alt=media&token=a04d351a-4459-4f84-bb98-7843f25b3a15";
const imgPortXXM_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_1360X460.png?alt=media&token=2140d23d-81ab-4b64-9e1e-80f2562d7267";
const imgPortXM_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_412X549.png?alt=media&token=633bc03b-f28c-4cc8-a393-09af1babdee6";
const imgPortM_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_412X535.png?alt=media&token=75ac593c-fead-4774-beda-22e6c316b609";
const imgPortXXXS_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_412X521.png?alt=media&token=a649a999-db4f-4c8b-bcc5-0326697672a7";
const imgPortXXS_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_393X510.png?alt=media&token=7bdc0aed-464d-4813-9f00-a90979b82a91";
const imgPortXS_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_375X400.png?alt=media&token=0ecd194e-02c9-4dd5-b906-a56d4d2862de";
const imgPortS_id3 = "https://firebasestorage.googleapis.com/v0/b/falves-incorporadora.appspot.com/o/NOLE_360X384.png?alt=media&token=0795273f-43f6-4d9a-93ad-79e46e6bbed6";

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
          <source media="(max-width: 1920px)" srcSet={imgAboutXXXL} />
          <source media="(max-width: 1600px)" srcSet={imgAboutXXL} />
          <source media="(max-width: 1536px)" srcSet={imgAboutXL} />
          <source media="(max-width: 1440px)" srcSet={imgAboutL} />
          <source media="(max-width: 1366px)" srcSet={imgAboutXXXM} />
          <source media="(max-width: 1360px)" srcSet={imgAboutXXM} />
          <source media="(max-width: 412px)" srcSet={imgAboutXM} />
          <source media="(max-width: 412px)" srcSet={imgAboutM} />
          <source media="(max-width: 412px)" srcSet={imgAboutXXXS} />
          <source media="(max-width: 393px)" srcSet={imgAboutXXS} />
          <source media="(max-width: 375px)" srcSet={imgAboutXS} />
          <source media="(max-width: 360px)" srcSet={imgAboutS} />
          <img src={imgAboutXXXL} alt="About" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture className="img w-100 img-carousel">
          <source media="(max-width: 1920px)" srcSet={imgPortXXXL_id1} />
          <source media="(max-width: 1600px)" srcSet={imgPortXXL_id1} />
          <source media="(max-width: 1536px)" srcSet={imgPortXL_id1} />
          <source media="(max-width: 1440px)" srcSet={imgPortL_id1} />
          <source media="(max-width: 1366px)" srcSet={imgPortXXXM_id1} />
          <source media="(max-width: 1360px)" srcSet={imgPortXXM_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortXM_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortM_id1} />
          <source media="(max-width: 412px)" srcSet={imgPortXXXS_id1} />
          <source media="(max-width: 393px)" srcSet={imgPortXXS_id1} />
          <source media="(max-width: 375px)" srcSet={imgPortXS_id1} />
          <source media="(max-width: 360px)" srcSet={imgPortS_id1} />
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
        <source media="(max-width: 1920px)" srcSet={imgPortXXXL_id3} />
          <source media="(max-width: 1600px)" srcSet={imgPortXXL_id3} />
          <source media="(max-width: 1536px)" srcSet={imgPortXL_id3} />
          <source media="(max-width: 1440px)" srcSet={imgPortL_id3} />
          <source media="(max-width: 1366px)" srcSet={imgPortXXXM_id3} />
          <source media="(max-width: 1360px)" srcSet={imgPortXXM_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortXM_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortM_id3} />
          <source media="(max-width: 412px)" srcSet={imgPortXXXS_id3} />
          <source media="(max-width: 393px)" srcSet={imgPortXXS_id3} />
          <source media="(max-width: 375px)" srcSet={imgPortXS_id3} />
          <source media="(max-width: 360px)" srcSet={imgPortS_id3} />
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
