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
import Image from "react-bootstrap/Image";

function Portfolio(portfolio) {
  var reqPortfolio = window.location.pathname;

  return (
    <div>
      <Navbar />

      {portfolios.map((portfolio) => {
        var kebabTitle = "/portfolio/" + _.kebabCase(portfolio.title);

        if (reqPortfolio === kebabTitle) {
          return (
            <div>
              <Image className="img img-portfolio" src={portfolio.srcJumbo} />
              <div className="ml-5 mr-5 mt-3">
                <h1 className="big-title">{portfolio.title}</h1>
                <p className="locationSizeP">
                  <FaMapMarkerAlt /> {portfolio.subtitle}{" "}
                </p>
                <div className="mt-3 mr-1 mb-2">
                  <Button
                    variant="outline-light"
                    className="mr-3"
                    size="lg"
                    href={portfolio.book}
                    target="_blank"
                    block
                  >
                    VER PROJETO
                  </Button>
                  <Button
                    style={{display: portfolio.isShow}}
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
