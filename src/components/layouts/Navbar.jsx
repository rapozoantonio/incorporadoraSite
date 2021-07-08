import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import styled from "styled-components";
import portfolio from "../../portfolio.js";
import _ from "lodash";
import "../../App.css";
import Logo from "../../img/logo_full_fosco_120x38.png";

function Navbar(props) {
  const HeaderContainer = styled.header`
    .header-main {
    }
  `;

  return (
    <header>
      <HeaderContainer>
        <ReactBootstrap.Navbar
          className="header-main"
          collapseOnSelect
          expand="lg"
          fixed="top"
        >
          <ReactBootstrap.Navbar.Brand href="/">
            <img
              className="logo-img"
              alt="F Alves Incorporadora logo"
              src={Logo}
            />
          </ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto"></ReactBootstrap.Nav>

            <ReactBootstrap.Nav>
              <ReactBootstrap.Nav.Link className="nav-link" href="/sobre">
                SOBRE
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.NavDropdown
                title="EMPREENDIMENTOS"
                id="collasible-nav-dropdown"
              >
                {portfolio.map((props) => {
                  return (
                    <ReactBootstrap.NavDropdown.Item
                      href={"/empreendimentos/" + _.kebabCase(props.title)
                      }
                    >
                      {props.title}
                    </ReactBootstrap.NavDropdown.Item>
                  );
                })}
                <ReactBootstrap.NavDropdown.Divider />
                <ReactBootstrap.NavDropdown.Item href="/#Lançamentos">
                  Lançamentos
                </ReactBootstrap.NavDropdown.Item>
              </ReactBootstrap.NavDropdown>
              <ReactBootstrap.Nav.Link href="/#Fale-Conosco">
                CONTATO
              </ReactBootstrap.Nav.Link>

              <ReactBootstrap.Nav.Link
                href="https://www.instagram.com/falves.inc/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </HeaderContainer>
    </header>
  );
}

export default Navbar;
