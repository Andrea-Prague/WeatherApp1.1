import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString('cs')
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return(
      <div>
        Today's date: {this.state.time}
      </div>
    )
  }

}


export default Clock;
