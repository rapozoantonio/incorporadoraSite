import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { FaReact } from "react-icons/fa";
import { GiBrazil } from "react-icons/gi";
import portfolio from "../../portfolio.js";

function Footer(props) {
  const year = new Date().getFullYear();

  const FooterContainer = styled.footer`
    .footer-middle {
      padding-top: 3rem;
      color: var(--mainOrange);

    }

    .footer-bottom {
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
      color: var(--mainLightGrey);
      text-align: center;
    }

    .footer-contact {
      color: var(--mainDark);
    }

    ul li a {
      color: var(--mainOrange);
    }

    ul li a:hover {
      color: var(--mainDark);
      transform: scale(1.1) !important;
    }
  `;
  return (
    <footer>
      <FooterContainer className="main-footer mr-5">
        <div className="footer-middle">
          <div className="ml-5">
            <div className="row">
              {/*Column 1 */}
              <div className="col-md-3 col-sm-6 footer-contact">
                <h3>Fale Conosco</h3>
                <ul className="list-unstyled">
                  <li>
                    <b>Localização:</b> Condo Building Seven Serventy
                  </li>
                  <li>
                    <b>Endereço:</b> R. Miguel de Frias, 77 - Icaraí, Niterói -
                    RJ, <span className="no-wrap">24220-008</span>
                  </li>
                  <li>
                    <b>Telefone:</b> (21) 2620-4488
                  </li>
                  <li>
                    <b>Horário:</b> Segunda a sexta de 09:00 às 17:00
                  </li>
                </ul>
              </div>
              {/*Column 2 */}
              <div className="col-md-3 col-sm-6">
                <h3>Institucional</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Página Inicial</a>
                  </li>
                  <li>
                    <a href="/about">Sobre</a>
                  </li>
                  <li>
                    <a href="/#Fale-Conosco">Fale Conosco</a>
                  </li>
                  <li>
                    <a href="/#Lançamentos">Lançamentos</a>
                  </li>
                </ul>
              </div>
              {/*Column 3 */}
              <div className="col-md-3 col-sm-6">
                <h3>Empreendimentos</h3>
                <ul className="list-unstyled">
                  {portfolio.map((props) => {
                    return (
                      <li>
                        <a href={"/portfolio/" + _.kebabCase(props.title)}>
                          {props.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/*Column 4 */}
              <div className="col-md-3 col-sm-6">
                <h3>Acompanhe Nossa Rede Social</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.instagram.com/falves.inc/"
                      target="_blank"
                      rel="noopener"
                    >
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom mt-5">
              <p className="text-xs-center text-center mt-5">
                Made with <FaReact /> by Antonio Candido Rapozo from{" "}
                <GiBrazil />
              </p>
              <p className="text-xs-center text-center">Copyright ⓒ {year}</p>
            </div>
          </div>
        </div>
      </FooterContainer>

      {/*Footer Bottom*/}
    </footer>
  );
}

export default Footer;
