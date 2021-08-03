import React from "react";
import _ from "lodash";
import "../../App.css";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function WhatsApp() {
  return (
    <div className="whatsapp-widget">
      <WhatsAppWidget
        companyName="Falves Incorporadora"
        phoneNumber="5521982264552"
        textReplyTime="Online"
        sendButton="Enviar!"
        message="Oi! 👋🏼 Como eu posso te ajudar? Atenciosamente, Pedro."
        placeholder="Escreva sua mensagem"
      />
    </div>
  );
}

export default WhatsApp;
