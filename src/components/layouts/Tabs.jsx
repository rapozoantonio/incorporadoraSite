import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function ControlledTabsPortfolio(props) {
  const [key, setKey] = useState("portfolioDescription");

  return (
    <div className="my-1 py-1 ml-4 mr-4 mb-5">
      <Tabs id="portfolio-tab" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab className="mt-5" eventKey="portfolioDescription" title="Descrição">
          <p>{props.description}</p>
          <p className="text-underline">
            <a href={props.book} target="_blank" rel="noopener noreferrer">
              Confira o book do empreendimento.
            </a>
          </p>
        </Tab>
        <Tab className="mt-5" eventKey="portfolioLocation" title="Localização">
          <iframe
            title="falvesLocation"
            src={props.srcMap}
            style={{
              border: "0",
              width: "100%",
              height: "315px",
              frameborder: "0",
              allowfullscreen: "",
              loading: "lazy",
            }}
            allowFullScreen
          ></iframe>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabsPortfolio;
