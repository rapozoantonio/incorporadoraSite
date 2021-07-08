import React from "react";
import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import ControlledCarousel from "../layouts/ControlledCarousel.jsx";
import CardPortfolio from "../layouts/Card.jsx";
import Contact from "../layouts/Contact.jsx";
import portfolios from "../../portfolio.js";
import "../../App.css";
import { Grid } from "@material-ui/core";


function Home() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <div className="">
        <h2 className="text-center mt-2 mb-2" id="Lançamentos">
          EMPREENDIMENTOS
        </h2>
        <Grid
          container
          spacing={0}
          directions="columns"
          alignItems="center"
          justify="center"
        >
          {portfolios.map((portfolio) => {
            return (
              <CardPortfolio
                {...portfolio}
                key={portfolio.id}
                alt={portfolio.title}
              />
            );
          })}
        </Grid>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
