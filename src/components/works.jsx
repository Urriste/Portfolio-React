import React, { Fragment } from "react";
import "./works.css";
import WorksCard from "./works-card";
import TusComprasImg from "../img/TusCompras.jpg";
import PiedraPapelTijerasImg from "../img/piedra-papel-tijera.jpg";
import PapaNoelImg from "../img/cuenta-regresiva.jpg";
import TiendaCieloImg from "../img/tienda-cielo.png";
import TheNewsImg from "../img/TheWorldNews.png";
import CountriesImg from "../img/countries.png";
import JournalImg from "../img/MyJournal.png";
import EarningsImg from "../img/MyEarnings.png";
import LotteryImg from "../img/myLottery.png";
import MyDesktopImg from "../img/my-desktop.png";
import MyChatsImg from "../img/my-chats.png";
import Fade from "../../node_modules/react-reveal/Fade";

class Works extends React.Component {
  render() {
    return (
      <Fragment>
        <h4 className="works-title">Mis Proyectos</h4>

        <section className="card-container">
          <Fade top>
            <WorksCard
              title="TusCompras"
              img={TusComprasImg}
              texto="Una web simple donde se puede tener una lista de compras en el bolsillo. Utiliza Html,CSS y Javascript."
              web="https://tuscompras.netlify.app/"
              repo="https://github.com/Urriste/TusCompras"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="Piedra Papel o Tijeras"
              img={PiedraPapelTijerasImg}
              texto="El clásico juego jugado con las manos, llevado a codigo. Tiene modos para 2 jugadores o contra la CPU. utiliza Html, CSS y Javascript"
              web="https://piedras-papeles-tijeras.netlify.app/"
              repo="https://github.com/Urriste/piedra-papel-tijeras"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="¿Cuanto Falta Para Que Llegue Papá Noel?"
              img={PapaNoelImg}
              texto="Una cuenta regresiva para la proxima Navidad! utiliza Html, CSS y Javascript"
              web="https://cuenta-regresiva-papa-noel.netlify.app/"
              repo="https://github.com/Urriste/Practicando-lenguajes/tree/main/Cuanto%20Falta%20Para%20Que%20Llegue%20Papa%20Noel"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="TiendaCielo"
              img={TiendaCieloImg}
              texto="Un E-commerce basado en la 'FakeStoreApi',que cuenta con carrito de compras. Utiliza Html, CSS,Javascript y LocalStorage"
              web="https://tiendacielo.netlify.app/"
              repo="https://github.com/Urriste/TiendaCielo"
            ></WorksCard>
          </Fade>

          <Fade top>
            <WorksCard
              title="TheWorld News"
              img={TheNewsImg}
              texto="Una aplicación para leer noticias de distintas partes del mundo, consumiendo la api de 'Gnews'. Utiliza Html, CSS y React JS [Hooks]"
              web="https://theworld-news.web.app/"
              repo="https://github.com/Urriste/TheWorld-News"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="Where in the world?"
              img={CountriesImg}
              texto="Una web donde se pueden visualizar todos los paises del mundo, junto con los detalles de c/u. Además, se puede filtrar por región, o buscar un país en especifico. Utiliza Html, CSS y React JS [Hooks]"
              web="https://countries-challenge.web.app/"
              repo="https://github.com/Urriste/countries-api-challenge"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="My Journal"
              img={JournalImg}
              texto="Una web que simula ser un diario, donde podemos crear entradas como un diario fisico corriente. Utiliza Html, CSS, ReactJs[Hooks] y LocalStorage"
              web="https://my-journal1.web.app/"
              repo="https://github.com/Urriste/my-journal"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="My Earnings"
              img={EarningsImg}
              texto="Una web nacida para satisfacer mi necesidad de llevar un control de mis ingresos diarios. Utiliza Html, CSS, ReactJs[Hooks], LocalStorage y Context API [Redux nativo de React]"
              web="https://mis-ganancias0.web.app/"
              repo="https://github.com/Urriste/MyEarnings"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="My Lottery"
              img={LotteryImg}
              texto="Creada principalmente para practicar un nuevo framework, la funcion de esta web es poder hacer sorteos rapidos, sencillos, y sin vueltas. Utiliza Angular"
              web="https://my--lottery.web.app/"
              repo="https://github.com/Urriste/myLottery"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="My Desktop"
              img={MyDesktopImg}
              texto="Portfolio alternativo, hecho en base a Windows XP, desde los estilos hasta los sonidos. Utiliza React JS"
              web="https://my-desktop-xp.web.app/"
              repo="https://github.com/Urriste/my-desktop"
            ></WorksCard>
          </Fade>
          <Fade top>
            <WorksCard
              title="My Chats"
              img={MyChatsImg}
              texto="Chat en tiempo real. Utiliza React JS, y Firebase para la autentificación y la base de datos realtime"
              web="https://my--chats.web.app/"
              repo="https://github.com/Urriste/myChats"
            ></WorksCard>
          </Fade>
        </section>
      </Fragment>
    );
  }
}

export default Works;
