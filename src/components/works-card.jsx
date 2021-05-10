import React, { Fragment } from "react";
import "./works.css";
import Github from "../img/github.png";
import Web from "../img/web.png";

class WorksCard extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <p className="card-title">{this.props.title}</p>
          <a href={this.props.web}>
            <img src={this.props.img} className="card-img" />
          </a>
          <p className="card-description">{this.props.texto}</p>
          <div className="card-links__container">
            <a href={this.props.web} className="card-link" target="_blank">
              <img src={Web} className="link-img" />
            </a>
            <a href={this.props.repo} className="card-link" target="_blank">
              <img src={Github} className="link-img" />
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WorksCard;
