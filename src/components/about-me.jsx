import React, { Fragment } from "react";
import MeImg from "../img/yo.jpeg";
import "./about-me.css";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";

class AboutMe extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="about-me__container">
          <Tada>
            <img className="me-img" src={MeImg} alt="" />
          </Tada>
          <Fade>
            <p className="about-me__paragraph">
              ¡Hola! Mi nombre es{" "}
              <span className="resaltado">Lucas Urriste</span>, y soy un{" "}
              <span className="resaltado">desarrollador Frontend</span> . Me
              interesa mucho el mundo de la tecnología, a mediados del 2020
              comencé mi formación con el objetivo de lograr desempeñarme como
              <span className="resaltado"> desarrollador fullstack</span> .
              Actualmente estoy siguiendo la ruta del Ddsarrollo Frontend, que
              incluye
              <span className="resaltado">
                {" "}
                HTML, CSS, JS, ReactJS y Firebase
              </span>
              ". Intento aprender siempre algo nuevo y realizo mis actividades
              con el mayor <span className="resaltado"> empeño </span> para
              lograr los{" "}
              <span className="resaltado">mejores resultados posibles.</span>
            </p>
          </Fade>
        </div>
      </Fragment>
    );
  }
}

export default AboutMe;
