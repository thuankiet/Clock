import React, { Component } from "react";
import "./App.css";
import Clock3 from "./components/Clock3";
// import Clock from "./components/Clock";

class App extends Component {
  render() {
    // const usaTime = new Date().toLocaleString("en-US", {
    //   timeZone: "America/New_York",
    // });
    // const vnTime = new Date().toLocaleString("en-US", {
    //   timeZone: "Asia/Ho_Chi_Minh",
    // });
    // const indiaTime = new Date().toLocaleString("en-US", {
    //   timeZone: "Asia/Kolkata",
    // });

    return (
      <div>
        <Clock3 />
      </div>
    );
  }
}

export default App;
