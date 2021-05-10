import React, { Fragment } from "react";
import "./contact.css";
import Linkedin from "../img/linkedin.svg";
import Instagram from "../img/instagram.svg";
import Jump from "react-reveal/Jump";
import LightSpeed from "react-reveal/LightSpeed";

class Contact extends React.Component {
  render() {
    return (
      <Fragment>
        <section className="contact-container">
          <LightSpeed>
            <h4 className="contact-title">
              Podes llegar a mi a través de estos medios:
            </h4>
          </LightSpeed>
          <div className="social-media__container">
            <div className="icon_container">
              <p className="social-media__name">LinkedIn</p>

              <a
                href="https://ar.linkedin.com/in/urriste"
                className="social-media__link"
                target="_blank"
              >
                {" "}
                <img
                  src={Linkedin}
                  alt="linkedin"
                  className="social-media__img"
                />
              </a>
            </div>
            <div className="icon_container">
              <p className="social-media__name">Instagram</p>
              <Jump>
                <a
                  href="https://www.instagram.com/urriste/?hl=es-la"
                  className="social-media__link"
                  target="_blank"
                >
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="social-media__img"
                  />
                </a>
              </Jump>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
