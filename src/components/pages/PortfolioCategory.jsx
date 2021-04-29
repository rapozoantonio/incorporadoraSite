import React from "react";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import ControlledCarousel from "../layouts/ControlledCarousel.jsx";
import CardPortfolio from "../layouts/Card.jsx";
import Contact from "../layouts/Contact.jsx";
//import Newsletter from "../layouts/Newsletter.jsx";
import portfolios from "../../portfolio.js";
import "../../App.css";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import CardDeck from "react-bootstrap/CardDeck";
import { Grid } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
//import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Category() {
  return (
    <div>
      <Navbar />
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button>COMERCIAL</Button>
        <Button>RESIDENCIAL</Button>
        
      </ButtonGroup>
      <Footer />
    </div>
  );
}

export default Category;
