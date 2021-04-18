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
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      xl={3}
      className="mb-3"
    >
      <Card className="cardWidth">
        <Link to={"/portfolio/" + _.kebabCase(props.title)}>
          <Card.Img
            className="img"
            variant="top"
            src={props.srcCard}
            alt={props.title}
            href={"/portfolio/" + _.kebabCase(props.title)}
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
            href={"/portfolio/" + _.kebabCase(props.title)}
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
