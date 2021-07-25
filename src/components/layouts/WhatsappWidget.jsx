import React from "react";
import _ from "lodash";
import "../../App.css";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function WhatsApp() {
  return (
    <div className="whatsapp-widget">
      <WhatsAppWidget
        companyName="Pedro Alves"
        phoneNumber="5521982264552"
        textReplyTime="Normalmente responde dentro de um dia"
        sendButton="Enviar!"
        message="Oi! 👋🏼 Como eu posso te ajudar?"
        placeholder="Escreva sua mensagem"
      />
    </div>
  );
}

export default WhatsApp;
