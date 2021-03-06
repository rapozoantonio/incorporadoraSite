import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import _ from "lodash";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../../App.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

function CardPortfolio(props) {
  return (
    <Grid
      xs={12}
      md={6}
      lg={4}
      container
      spacing={0}
      directions="columns"
      alignItems="center"
      justify="center"
    >
      <Card className="cardWidth  card-width mb-4 ml-4 mr-4">
        <Link to={"/empreendimentos/" + _.kebabCase(props.title)}>
          <Card.Img
            className="img img-card"
            variant="top"
            src={props.srcCard}
            alt={props.title}
            href={"/empreendimentos/" + _.kebabCase(props.title)}
          />
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <FaMapMarkerAlt size={15} />
            {props.subtitle}
          </Card.Subtitle>
          <Card.Text>{props.description.slice(0, 80)}...</Card.Text>
          <Button
            variant="outline-light"
            href={"/empreendimentos/" + _.kebabCase(props.title)}
            block
          >
            Saiba mais
          </Button>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default CardPortfolio;
