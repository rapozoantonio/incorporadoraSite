import React from "react";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { BiBuildingHouse } from "react-icons/bi";
import "../../App.css";
import MetaTags from "react-meta-tags";
import WhatsApp from "../layouts/WhatsappWidget.jsx";

function NotFoundPage() {
  const NotFoundContainer = styled.div`
    .error-template {
      padding: 100px 15px;
      text-align: center;
      min-height: 70vh;
    }

    .error-details {
      padding-top: 3rem;
      padding-bottom: 2rem;
      color: var(--mainGrey);
      text-align: center;
    }

    .error-actions {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .btn {
      margin-right: 10px;
    }
  `;
  return (
    <div>
      <MetaTags>
        <title>Erro 404 Página não encontrada | Falves Incorporadora</title>
        <meta
          name="description"
          content="Os melhores empreendimentos para você ou seu negócio você encontra aqui na Falves Incorporadora. Encontre casas, apartamentos e imóveis perfeitos para compra. Acesse já!"
        />
      </MetaTags>
      <Navbar />
      <NotFoundContainer className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h2>
                <strong>Oops!</strong>
              </h2>
              <h1>Erro 404 Página não encontrada</h1>
              <div className="error-details">
                <div className="error-actions mt-4">
                  <Button
                    className="btn-dark btn-outline-white btn-lg"
                    href="/"
                  >
                    <BiBuildingHouse /> Página Inicial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NotFoundContainer>
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default NotFoundPage;
