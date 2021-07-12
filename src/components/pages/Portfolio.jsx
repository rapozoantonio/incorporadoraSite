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

function Portfolio(portfolio) {
  var reqPortfolio = window.location.pathname;

  return (
    <div>
      <Navbar />

      {portfolios.map((portfolio) => {
        var kebabTitle = "/empreendimentos/" + _.kebabCase(portfolio.title);

        if (reqPortfolio === kebabTitle) {
          return (
            <div>
              <div className="">
                <div className="">
                  <picture>
                    <source
                      media="(max-width: 360px)"
                      srcSet={portfolio.srcPortS}
                    />
                    <source
                      media="(max-width: 375px)"
                      srcSet={portfolio.srcPortXS}
                    />
                    <source
                      media="(max-width: 393px)"
                      srcSet={portfolio.srcPortXXS}
                    />
                    <source
                      media="(max-width: 412px)"
                      srcSet={portfolio.srcPortXXXS}
                    />
                    <source
                      media="(max-width: 412px)"
                      srcSet={portfolio.srcPortM}
                    />
                    <source
                      media="(max-width: 412px)"
                      srcSet={portfolio.srcPortXM}
                    />
                    <source
                      media="(max-width: 1360px)"
                      srcSet={portfolio.srcPortXXM}
                    />
                    <source
                      media="(max-width: 1366px)"
                      srcSet={portfolio.srcPortXXXM}
                    />
                    <source
                      media="(max-width: 1440px)"
                      srcSet={portfolio.srcPortL}
                    />
                    <source
                      media="(max-width: 1536px)"
                      srcSet={portfolio.srcPortXL}
                    />
                    <source
                      media="(max-width: 1600px)"
                      srcSet={portfolio.srcPortXXL}
                    />

                    <source
                      media="(max-width: 1920px)"
                      srcSet={portfolio.srcPortXXXL}
                    />

                    <img src={portfolio.srcPortXXXL} alt="Portfolio" />
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

      <Footer />
    </div>
  );
}

export default Portfolio;
