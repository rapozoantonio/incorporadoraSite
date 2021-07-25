import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _ from "lodash";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import MediaList from "../layouts/MediaList.jsx";
import ControlledTabsPortfolio from "../layouts/Tabs.jsx";
import portfolios from "../../portfolio.js";
import "../../App.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import MetaTags from "react-meta-tags";
import WhatsApp from "../layouts/WhatsappWidget.jsx";


function Portfolio(portfolio) {
  var reqPortfolio = window.location.pathname;

  return (
    <div>
        <MetaTags>
        <title>
          Empreendimentos | Falves Incorporadora
        </title>
        <meta
          name="description"
          content="Os melhores empreendimentos para você ou seu negócio você encontra aqui na Falves Incorporadora. Encontre casas, apartamentos e imóveis perfeitos para compra. Acesse já!"
        />
      </MetaTags>
      <Navbar />

      {portfolios.map((portfolio) => {
        var kebabTitle = "/empreendimentos/" + _.kebabCase(portfolio.title);

        if (reqPortfolio === kebabTitle) {
          return (
            <div>
              <div className="img-fullScreen">
                <div className="img-fullScreen">
                  <picture className="img-fullScreen">
                    <source
                      className="img-screen"
                      media="(max-width: 360px)"
                      srcSet={portfolio.srcPortS}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 375px)"
                      srcSet={portfolio.srcPortXS}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 393px)"
                      srcSet={portfolio.srcPortXXS}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 412px)"
                      srcSet={portfolio.srcPortXXXS}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 412px)"
                      srcSet={portfolio.srcPortM}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 828px)"
                      srcSet={portfolio.srcPortXM}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 1360px)"
                      srcSet={portfolio.srcPortXXM}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 1366px)"
                      srcSet={portfolio.srcPortXXXM}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 1440px)"
                      srcSet={portfolio.srcPortL}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 1536px)"
                      srcSet={portfolio.srcPortXL}
                    />
                    <source
                      className="img-screen"
                      media="(max-width: 1600px)"
                      srcSet={portfolio.srcPortXXL}
                    />

                    <source
                      className="img-screen"
                      media="(max-width: 1920px)"
                      srcSet={portfolio.srcPortXXXL}
                    />

                    <img className="img-screen" src={portfolio.srcPortXXXL} alt="Portfolio" />
                  </picture>
                </div>
              </div>
              <div className="ml-5 mr-5 mt-3">
                <h1 className="big-title">{portfolio.title}</h1>
                <p className="locationSizeP">
                  <FaMapMarkerAlt /> {portfolio.subtitle}{" "}
                </p>
                <div className="mb-5">
                  <div className="mt-3 mr-1 mb-5">
                    <Button
                      style={{ display: portfolio.isShowBook }}
                      variant="outline-light"
                      className="mr-3 mb-2"
                      size="lg"
                      href={portfolio.book}
                      target="_blank"
                      block
                    >
                      VER PROJETO
                    </Button>
                    <Button
                      style={{ display: portfolio.isShowVideo }}
                      variant="outline-light"
                      className="mb-4 mr-3"
                      href={portfolio.video}
                      target="_blank"
                      size="lg"
                      block
                    >
                      VÍDEO
                    </Button>
                  </div>
                </div>
                <Row>
                  <Col sm={8}>
                    <ControlledTabsPortfolio {...portfolio} />
                  </Col>
                  <Col sm={4}>
                    <MediaList {...portfolio} />
                  </Col>
                </Row>
              </div>
            </div>
          );
        } else {
        }
      })}
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default Portfolio;
