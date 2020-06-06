import React, { Component } from "react";
import "./App.css";
import Clock from "./components/Clock";
// import Clock2 from "./components/Clock2";

class App extends Component {
  render() {
    const usaTime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    // const vnTime = new Date().toLocaleString("en-US", {
    //   timeZone: "Asia/Ho_Chi_Minh",
    // });
    // const indiaTime = new Date().toLocaleString("en-US", {
    //   timeZone: "Asia/Kolkata",
    // });
    return (
      <div>
        <Clock time={usaTime} nation="US Timezone" zone="en-US" timeZone="America/New_York" />
      </div>
    );
  }
}

export default App;
