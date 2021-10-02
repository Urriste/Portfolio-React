//React Imports
import React, { Fragment } from "react";

//Internal Imports
import Home from "../../img/home.svg";
import "./footer.css";

//External Imports
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
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
