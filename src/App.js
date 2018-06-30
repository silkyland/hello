import React, { Component } from "react";
import SayHello from "./components/SayHello";
import Border from "./components/Border";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bundit Nuntates",
      age: 30
    };
  }

  incrementAge() {
    this.setState({ age: this.state.age + 10 });
  }

  decrementAge() {
    this.setState({ age: this.state.age - 10 });
  }

  render() {
    return (
      <div className="App">
        <SayHello name={this.state.name} age={this.state.age} />
        <p>age, {this.state.age}</p>
        <div
          style={{
            width: this.state.age,
            border: 2,
            borderStyle: "solid",
            color: "#deab53"
          }}
        />
        <Border>
          <button onClick={() => this.decrementAge()}>ลบอายุ</button>{" "}
          <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
        </Border>
      </div>
    );
  }
}

export default App;
