import React, { Component } from "react";

var usaTime = new Date().toLocaleString("en-US", {
  timeZone: "America/New_York",
});

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: usaTime };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          It is{" "}
          {this.state.date.toLocaleString("en-US", {
            timeZone: "America/New_York",
          })}
          .
        </h2>
      </div>
    );
  }
}

export default Clock;
