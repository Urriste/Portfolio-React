import React, { Fragment } from "react";
import { Link } from "../../node_modules/react-router-dom";
import "./footer.css";
import Fade from "../../node_modules/react-reveal/Fade";
import Home from "../img/home.svg";

function Footer() {
  return (
    <Fragment>
      <Fade bottom>
        <div className="footer">
          <Link to="/" className="nav-link">
            <img className="nav-img" src={Home} />
          </Link>
          <Link to="/about-me" className="nav-link">
            Conoceme
          </Link>
          <Link className="nav-link" to="/skills">
            Skills
          </Link>
          <Link className="nav-link" to="/proyectos">
            Proyectos
          </Link>
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
        </div>
      </Fade>
    </Fragment>
  );
}

export default Footer;
