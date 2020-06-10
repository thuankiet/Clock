import React, { Component } from "react";

class Clock3 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const ctx = canvas.getContext("2d");
    let radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.9;
    let drawClock = () => {
      this.drawFace(ctx, radius);
      this.drawNumbers(ctx, radius);
      this.drawTime(ctx, radius);
    };
    setInterval(drawClock, 1000);
  }

  drawFace(ctx, radius) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "#333");
    grad.addColorStop(0.5, "white");
    grad.addColorStop(1, "#333");
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();
  }

  drawNumbers(ctx, radius) {
    let ang;
    let num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx, radius) {
    this.setState((state) => ({
      date: new Date(),
    }));
    let { date } = this.state;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    //hour
    hour = hour % 12;
    hour =
      (hour * Math.PI) / 6 +
      (minute * Math.PI) / (6 * 60) +
      (second * Math.PI) / (360 * 60);
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI) / 30;
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  render() {
    return (
      <div>
        <canvas
          width="400px"
          height="400px"
          style={{ backgroundColor: "#333" }}
          className="Canvas"
          ref="canvas"
        ></canvas>
      </div>
    );
  }
}

export default Clock3;
