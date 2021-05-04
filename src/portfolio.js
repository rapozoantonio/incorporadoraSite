import imgCard_id1 from "./img/Card-img/BAY_VIEW_286x180px.jpg";
import imgCard_id2 from "./img/Card-img/DREAMLAND_286x180px.jpg";
import imgCard_id3 from "./img/Card-img/NOLE_286x180px.jpg";
// import imgCard_id4 from "./img/Card-img/TRAVESSA_MARICA_286x180px.jpg
import imgCard_id5 from "./img/Card-img/VINTAGE_MALL_286x180px.jpg";
import imgCard_id6 from "./img/Card-img/VIVA_BARRA_286x180px.jpg";
import imgCard_id7 from "./img/Card-img/VIVA_BÚZIOS_286x180px.jpg";
// import imgCard_id8 from "./img/Card-img/TESLA_286x180px.jpg";
import imgCard_id9 from "./img/Card-img/PREAMAR_286x180px.jpg";

// Jumbotron Images
import imgJumbotron_id1 from "./img/Jumbotron-img/BAY_VIEW_975x728px.png";
import imgJumbotron_id2 from "./img/Jumbotron-img/DREAMLAND_975x728px.png";
import imgJumbotron_id3 from "./img/Jumbotron-img/NOLE_975x728px.png";
// import imgJumbotron_id4 from "./img/Jumbotron-img/TRAVESSA_MARICA_975x728px.png"
import imgJumbotron_id5 from "./img/Jumbotron-img/VINTAGE_MALL_975x728px.png";
import imgJumbotron_id6 from "./img/Jumbotron-img/VIVA_BARRA_975x728px.png";
import imgJumbotron_id7 from "./img/Jumbotron-img/VIVA_BÚZIOS_975x728px.png";
// import imgJumbotron_id8 from "./img/Jumbotron-img/TESLA_975x728px.png";
import imgJumbotron_id9 from "./img/Jumbotron-img/PREAMAR_975x728px.png";

// Books

import book_id1 from "./books/BAY_VIEW_BOOK.pdf";
import book_id2 from "./books/DREAMLAND_BOOK.pdf";
import book_id3 from "./books/NOLE_BOOK.pdf";
//import book_id4 from "./books/TRAVESSA_MARICA_BOOK.pdf";
import book_id5 from "./books/VINTAGE_MALL_BOOK.pdf";
import book_id6 from "./books/VIVA_BARRA_BOOK.pdf";
import book_id7 from "./books/VIVA_BÚZIOS_BOOK.pdf";
//import book_id8 from "./books/TESLA_BOOK.pdf";
//import video_id9 from "./videos/PREAMAR_VIDEO.mp4"

// Videos

import video_id1 from "./videos/BAY_VIEW_VIDEO.mp4";
//import video_id2 from "./videos/DREAMLAND_VIDEO.mp4"
//import video_id3 from "./videos/NOLE_VIDEO.mp4"
//import video_id4 from "./videos/TRAVESSA_MARICA_VIDEO.mp4"
//import video_id5 from "./videos/VINTAGE_MALL_VIDEO.mp4"
import video_id6 from "./videos/VIVA_BARRA_VIDEO.mp4";
//import video_id7 from "./videos/VIVA_BÚZIOS_VIDEO.mp4"
//import video_id8 from "./videos/TESLA_VIDEO.mp4"
//import video_id9 from "./videos/PREAMAR_VIDEO.mp4"

const portfolio = [
  {
    id: 1,
    title: "Bay View Maraú",
    subtitle: "Barra Grande - Maraú - BA",
    description:
      "Situada ao longo de uma enseada protegida, em frente a uma das praias mais desejáveis da Bahia, conhecida por suas águas tranquilas para nadar e recifes de coral cristalinos, onde uma curta aventura no mar revela um mundo subaquático de peixes tropicais e belezas marinhas. ",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=16IYdq_huWMtnI8WX7EUF5k2liFZ9Gezf",
    srcCard: imgCard_id1,
    srcJumbo: imgJumbotron_id1,
    book: book_id1,
    video: video_id1,
    isShowBook:"",
    isShowVideo: "",
    uniqueFeat:"De frente para a Baia de Camamu e próximo ao centro de Barra Grande. Exclusivo e sofistifcado. Área de lazer completa e estacionamento privativo.",
    areaPrivativa: "95 a 110 m²",
    nUnidades:24,
    tipologia:"3 quartos"
  },
  {
    id: 2,
    title: "Dreamland Bungalows",
    subtitle: "Taipu de Fora - Maraú - BA",
    description:
      "Dreamland Bungalows é um empreendimento inovador EM FRENTE a uma das mais maravilhosas praias do Brasil: TAIPÚ DE FORA. A Dreamland foi pensada e projetada para proporcionar qualidade de vida, conforto e tranquilidade para você. São 20 apartamentos possuindo até 86 m2, com 2 suítes e alguns possuem VARANDA e VISTA PARA O MAR. Dreamland Bungalows também conta com bar e restaurante próprio, estacionamento privativo, espaço gourmet, deck, spa, segurança 24 horas e tem disponível o mesmo serviço* que a pousada Dreamland Bungalows oferece para seus hóspedes. Tudo isso a alguns passos do mar!",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=1U9J5Tl9h5n2h93WiJdYrVRXlf26RtCHg",
    srcCard: imgCard_id2,
    srcJumbo: imgJumbotron_id2,
    book: book_id2,
    video: "",
    isShowBook:"",
    isShowVideo: "none",
    uniqueFeat:"Próximo as piscinas naturais, o Dreamland está localizado na Praia de Tiapu de Fora - Barra Grande. Possui restaurante próprio, piscina, estacionamento privativo, espaço gourmet, serviços, academia e spa.",
    areaPrivativa: "78 a 85 m²",
    nUnidades:20,
    tipologia:"2 quartos"
  },
  {
    id: 3,
    title: "NOLe Piratininga",
    subtitle: "Piratininga - Niterói - RJ",
    description:
      "O NOLe é o mais recente lançamento de alto padrão na Praia de Piratininga, em Niterói. Acompanhando as tendências das grandes cidades, o empreendimento oferece apartamentos no formato quarto/sala, um diferencial a mais para quem procura o bem-estar, praticidade e conforto do jeito moderno de morar. A localização estratégica do NOLe que fica entre a Praia e a Lagoa de Piratininga, é ideal para curtir um dia a dia inspirador e apreciar as belas vistas que sua localização proporciona. Tudo isso no conforto de estar no seu espaço.",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=13VCiLyVOwFzeiY2oV4A6p1wdbnRIKErz",
    srcCard: imgCard_id3,
    srcJumbo: imgJumbotron_id3,
    book: book_id3,
    video: "",
    isShowBook:"",
    isShowVideo: "none",
    uniqueFeat:"Quarta e sala tradicional, prático e confortável. Localização estratégica: de um lado a praia, do outro a lagoa de Piratininga.",
    areaPrivativa:"45 m²",
    nUnidades:36,
    tipologia:"Quarto e sala"
  },
  /*{
    id: 4,
    title: "Travessa Maricá",
    subtitle: "Centro - Maricá - RJ",
    description:
      "Uma escolha de sucesso. Novo Shopping no Centro de Maricá. União de excelente localização e estrutura completa. Oportunidade para acomodar o seu negócio. O empreendimento foi planejado para atender com excelência, garantindo comodidade, tranquilidade e segurança. Antecipe-se ao lançamento.",
    srcMap:
      "https://www.google.com.br/maps/d/u/0/embed?mid=1ZXX--poeU6XJwpbfiW8rk-1HZCeNEPls",
    srcCard:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177f0712318%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177f0712318%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.9609375%22%20y%3D%2297.6734375%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    srcJumbo: "",
    book: book_id4,
    video: "",
    isShowBook:"",
    isShowVideo: "none",
    uniqueFeat:"No Centro de Maricá, ligando as duas principais ruas da cidade. Estacionamento exclusivo para clientes e lojistas. Local ideal para o seu negócio.",
    areaPrivativa:"28 a 55 m²",
    nUnidades:36,
    tipologia:"Loja"
  },*/
  {
    id: 5,
    title: "Vintage Mall Ilhéus",
    subtitle: "Centro - Ilhéus - BA",
    description:
      "O Vintage Mall é o novo empreendimento comercial localizado no centro históricod a cidade de Ilhéus e conquista pela união de excelente localização e estrutura completa. O empreendimento conta com 31 lojas de 29,80 m² a 257,00 m², ideal para empresas de pequeno e grande porte, tornando o Vintage a oportunidade de acomodar o seu negócio próximo a tudo que você precisa. Posicionado estrategicamente para garantir conforto e estabilidade para sua empresa, o Vintage Mall encontra-se na Av. Soares Lopes, um local favorecido pela presença de diversos estabelecimentos ao redor. O empreendimento foi planejado para atender com excelência ao seu negócio, garantindo comodidade, tranquilidade e segurança, tornando-se o local ideal para o seu sucesso.",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=1tf6SkBVU9fliPVHoXODuuk_fq_Aq-Llx",
    srcCard: imgCard_id5,
    srcJumbo: imgJumbotron_id5,
    book: book_id5,
    video: "",
    isShowBook:"",
    isShowVideo: "none",
    uniqueFeat:"No Centro histórico de Ilhéus  e próximo aos principais pontos turísticos da cidade. Localização estrtágica para o seu negócio.",
    areaPrivativa: "23 a 250 m²",
    nUnidades:31,
    tipologia:"Loja"
  },
  {
    id: 6,
    title: "Viva Barra",
    subtitle: "Barra Grande - Maraú - BA",
    description:
      "Localizado estrategicamente no centro de Barra Grande, próximo ao comércio local, ao lado do polo gastronômico e sem deixar de estar ao lado do mar, o Viva Barra entrega conforto e praticidade nas suas 44 unidades amplas de 2 ou 3 quartos com suíte, distribuídas em 2 pavimentos, com áreas que vão até 158 m² contando com garden ou terraçõ privativo. O empreendimento possui estacionamento privativo, portaria com monitoramente 24h e veículo elétrico para sua comodidade, espaço de lazer com piscina e sauna, espaço gourmet com churrasqueira e forno de pizza, espaço fitness e muito mais. Um ambiente moderno, feito na medida para você viver momentos únicos e desfrutar as maravilhas desse paraíso.",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=1YfzcouqP__Y3SvJbdWaD7UQIgpQ318LJ" ,    srcCard: imgCard_id6,
    srcJumbo: imgJumbotron_id6,
    book: book_id6,
    video: video_id6,
    isShowBook:"",
    isShowVideo: "",
    uniqueFeat:"Próximo ao Centro de Barra Grande e aos principais pontos turísticos e gastronomicos da Peninsula de Maraú. Piscina, academia, espaço gourmet e estacionamento privativo. A poucos metros da praia e da Baia de Camamu..",
    areaPrivativa:"52 a 76 m²",
    nUnidades:44,
    tipologia:"2 e 3 quartos"
  },
  {
    id: 7,
    title: "Viva Búzios Residence",
    subtitle: "Geribá - Búzios - RJ",
    description:
      "Viva Búzios é um empreendimento imobiliário de alto padrão, localizado estratégicamente no balneário mais charmoso do Brasil: Búzios. O Viva Búzios foi projetado para proporcionar qualidade de vida, conforto e tranquilidade. São 24 unidades amplas de 2 pavimentos cada, possuindo até 107 m² de área contando com garden privativo e 2 suítes em todas as unidades. O empreendimento possui estacionamento privativo portaria com monitoramento 24 horas, espaço de lazer com piscina e sauna, espaço gourmet com churrasqueira espaço fitness e muito mais. Um ambiente moderno, feito na medida para você viver momentos únicos e desfrutar as maravilhas de Búzios.",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=16ufpD2ys6UB8HRzRUeDfECZ5jRWLkYr8" ,
    srcCard: imgCard_id7,
    srcJumbo: imgJumbotron_id7,
    book: book_id7,
    video: "",
    isShowBook:"",
    isShowVideo: "none",
    uniqueFeat:"Infraestrutura, conforto e tranquilidade. Estacionamento privativo, portaria 24h, garden privativo, espaço de lazer com piscina e sauna. Área Gourmet e espaço Fitness.",
    areaPrivativa:"110 m²",
    nUnidades:24,
    tipologia:"4 quartos"
  },
 /* {
    id: 8,
    title: "Tesla Design Residence",
    subtitle: "Piratininga - Niterói -  RJ",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    srcMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8680710536664!2d-43.07797618428538!3d-22.955085345369053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9986e0d24d46b3%3A0x6c504dd7c2ba9aa3!2sRua%20Namir%20Peralta%2C%2031%20-%20Piratininga%2C%20Niter%C3%B3i%20-%20RJ%2C%2024358-100!5e0!3m2!1sen!2sbr!4v1614634679257!5m2!1sen!2sbr",
    srcCard:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177f0712318%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177f0712318%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.9609375%22%20y%3D%2297.6734375%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    srcJumbo: "",
    book: book_id8,
    video: "",
    isShowBook:"",
    isShowVideo: "none",
    uniqueFeat:"",
    areaPrivativa:"",
    nUnidades:"",
    tipologia:"",
  }, */
  {
    id: 9,
    title: "Preamar Residence",
    subtitle: "Barra Grande - Maraú - BA",
    description:
      "À ser definido....",
    srcMap:
    "https://www.google.com.br/maps/d/u/1/embed?mid=1lZAPq9ds5r4cfQPQuZrnMzoXQzpGTB1K",
    srcCard: imgCard_id9,
    srcJumbo: imgJumbotron_id9,
    book: "",
    video: "",
    isShowBook:"none",
    isShowVideo: "none",
    uniqueFeat:"Próximo ao Centro de Barra Grande e aos principais pontos turísticos e gastronômicos da Peninsula de Maraú.  Possui piscina, churrasqueira e estacionamento privativo. A poucos metros das praias do Centro e Baia de Camamu.",
    areaPrivativa:"45 a 55 m²",
    nUnidades:16,
    tipologia:"quarto e sala"
  }
];

export default portfolio;
