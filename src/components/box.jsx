import React from "react";
import "./skills.css";

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <img src={this.props.img} className="box-img" />
      </div>
    );
  }
}

export default Box;
