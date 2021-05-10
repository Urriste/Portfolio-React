import React, { Fragment } from "react";
import "./works.css";
import WorksCard from "./works-card";
import TusComprasImg from "../img/TusCompras.jpg";
import PiedraPapelTijerasImg from "../img/piedra-papel-tijera.jpg";
import PapaNoelImg from "../img/cuenta-regresiva.jpg";
import TiendaCieloImg from "../img/tienda-cielo.png";
import ChatImg from "../img/crotochat.jpg";
import TheNewsImg from "../img/TheWorldNews.png";
import CountriesImg from "../img/countries.png";
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
              title="CrotoChat"
              img={ChatImg}
              texto="Chat Realtime desarrollado en un curso de Firebase, donde se puede escribir logeando con Google. Utiliza Html, CSS,Javascript y Firebase"
              web="https://crotochat-19bb2.web.app/"
              repo="https://github.com/Urriste/firebase-realtime-chat"
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
        </section>
      </Fragment>
    );
  }
}

export default Works;
