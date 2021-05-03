import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
//import Newsletter from "../layouts/Newsletter.jsx";
import "../../App.css";
import { FaRegEye } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import JumboBgImg from "../../img/CAPA_1.png";
import Image from "react-bootstrap/Image";
import Contact from "../layouts/Contact.jsx";

function About() {
  return (
    <div>
      <Navbar />
      <Image className="img-about" src={JumboBgImg} fluid />
      <div className="ml-5 mr-5 mt-3 mb-5">
        <div className="text-center">
          <h1 className="mt-3">A FALVES</h1>
          <p>
            Falves Incorporadora é uma empresa que busca projetos
            de excelência e sofisticação em regiões com grande potencial de
            desenvolvimento. A incorporadora atua em propostas residenciais e
            comerciais que visam melhorar a qualidade de vida e o
            desenvolvimento de novos negócios dos nossos parceiros. A empresa
            constrói sua história participando de obras por administração e
            incorporação em diferentes regiões do Brasil. A Falves atua nos
            estados da Bahia (Maraú e Ilhéus) e Rio de Janeiro (Niterói, Búzios
            e Maricá), se adequando a realidade do mercado local, aos novos
            tempos e novos negócios.
          </p>
          <p>
            <Button
              size="lg"
              href="/#Lançamentos"
              block
              className="mt-5"
              variant="outline-light"
            >
              LANÇAMENTOS
            </Button>
          </p>
        </div>
        <Row className="mt-5 text-center">
          <Col sm>
            <Media>
              <Media.Body>
                <GiOnTarget size={40} className="orange" />
                <h2>Missão</h2>
                <p>
                  Buscar continuamente a satisfação de nossos parceiros, com
                  projetos inteligentes e criativos para o mercado imobiliário
                  fortalecendo ainda mais a sólida reputação da marca. Realizar
                  negócios imobiliários com valor agregado e liquidez, com
                  excelência, gerando resultados sustentáveis para todas as
                  partes interessadas.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col sm>
            <Media>
              <Media.Body>
                <FaRegEye size={40} className="orange" />
                <h2>Visão</h2>
                <p>
                  Ser reconhecida no mercado imobiliário, pela excelência e
                  valor agregado, nas regiões de atuação.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col sm>
            <Media>
              <Media.Body>
                <MdAccountBalance size={40} className="orange" />
                <h2>Valores</h2>
                <p>Responsabilidade</p>
                <p>Transparência</p>
                <p>Foco em resultados</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default About;
