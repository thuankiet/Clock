import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: props.time };
  }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  //   shouldComponentUpdate() {
  //     console.log("shouldComponentUpdate");
  //     return true;
  //   }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { zone, timeZone, nation } = this.props;
    return (
      <div>
        <h1>{nation}</h1>
        <h2>
          It is{" "}
          {this.state.date.toLocaleString(zone, {
            timeZone: timeZone,
          })}
          .
        </h2>
      </div>
    );
  }
}

export default Clock;
