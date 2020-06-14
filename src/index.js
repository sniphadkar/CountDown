import React from 'react';
import ReactDOM from 'react-dom';


class Countdown extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 50 };
    this.timer = 0;
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer=()=> {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown=()=> {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <div>
      <h1>{this.state.time.h}h :  {this.state.time.m}m : {this.state.time.s}s</h1>
        <button onClick={this.startTimer}>Start Countdown</button>
      </div>
    );
  }
}

ReactDOM.render(<Countdown />, document.getElementById('container'))

