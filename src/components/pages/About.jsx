import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import "../../App.css";
import { FaRegEye } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import Contact from "../layouts/Contact.jsx";

// IMPLEMENT OTHER SIZES IN PRODUCTION 
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



function About() {
  return (
    <div>
      <Navbar />
      <picture className="img-about">
                     <source media="(max-width: 1920px)" srcSet={imgAboutXXXL}/>
                     <source media="(max-width: 1600px)" srcSet={imgAboutXXL}/>  
                     <source media="(max-width: 1536px)" srcSet={imgAboutXL}/>
                     <source media="(max-width: 1440px)" srcSet={imgAboutL}/> 
                     <source media="(max-width: 1366px)" srcSet={imgAboutXXXM}/>
                     <source media="(max-width: 1360px)" srcSet={imgAboutXXM}/>  
                     <source media="(max-width: 412px)" srcSet={imgAboutXM}/>
                     <source media="(max-width: 412px)" srcSet={imgAboutM}/> 
                     <source media="(max-width: 412px)" srcSet={imgAboutXXXS}/>
                     <source media="(max-width: 393px)" srcSet={imgAboutXXS}/>  
                     <source media="(max-width: 375px)" srcSet={imgAboutXS}/>
                     <source media="(max-width: 360px)" srcSet={imgAboutS}/>               
                      <img src={imgAboutXXXL} alt="About-Picture"/>
                    </picture> 

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
