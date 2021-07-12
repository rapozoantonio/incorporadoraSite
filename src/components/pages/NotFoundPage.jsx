import React from "react";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { BiBuildingHouse } from "react-icons/bi";
import "../../App.css";

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
      <Footer />
    </div>
  );
}

export default NotFoundPage;
