//React Imports
import React, { Fragment } from "react";

//Internal Imports
import "./header.css";

//External Imports
import Typed from "react-typed";
import Jump from "react-reveal/Jump";
import Tilt from "react-tilt";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="header-container">
          <h1 className="title">Yo soy</h1>
          <Typed
            className="typed"
            strings={["Lucas Urriste", "Frontend", "Autodidacta"]}
            typeSpeed={50}
            backSpeed={45}
            loop
          />
          <Tilt
            className="tilt"
            options={{ max: 50, scale: 1.2, perspective: 500 }}
          >
            <h2 className="big-letter">L</h2>
          </Tilt>
          <Jump>
            <p className="advise">Bienvenido/a</p>
          </Jump>
        </div>
      </Fragment>
    );
  }
}

export default Header;
