import React, { Fragment } from "react";
import "./skills.css";
import Box from "./box";
import HtmlImg from "../img/html-5.png";
import CssImg from "../img/css-3.png";
import JsImg from "../img/js.png";
import ReactImg from "../img/react.png";
import BootstrapImg from "../img/bootstrap.png";
import GitImg from "../img/git.svg";
import SqlImg from "../img/sql.svg";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";

class Skills extends React.Component {
  render() {
    return (
      <Fragment>
        <section className="skills">
          <LightSpeed left>
            <h4 className="skills-title">¿Qué tecnologías manejo?</h4>
          </LightSpeed>
          <div className="skills-container">
            <Zoom>
              <Box img={HtmlImg}></Box>
            </Zoom>
            <Zoom>
              <Box img={CssImg}></Box>
            </Zoom>
            <Zoom>
              <Box img={JsImg}></Box>
            </Zoom>
            <Zoom>
              <Box img={ReactImg}></Box>
            </Zoom>
            <Zoom>
              <Box img={BootstrapImg}></Box>
            </Zoom>
            <Zoom>
              <Box img={GitImg}></Box>
            </Zoom>
            <Zoom>
              <Box img={SqlImg}></Box>
            </Zoom>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Skills;
