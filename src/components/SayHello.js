import React, { Component } from "react";

class SayHello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>สวัสดี, {this.props.name}</h1>
        <p>อายุ, {this.props.age}</p>
      </div>
    );
  }
}

export default SayHello;
