import React from "react";
//import portfolio from "./portfolio.js";
// React Router import
import {Switch, Route} from "react-router-dom";
// Import pages
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import Category from "./components/pages/PortfolioCategory.jsx";
import "./App.css";

function App() {

  

  return (
    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio/:portfolioKebabTitle" component={Portfolio}/>
        <Route path="/portfolio-category" component={Category} />
        <Route component={NotFoundPage}/>   
      </Switch>
 
  );
}

export default App;
