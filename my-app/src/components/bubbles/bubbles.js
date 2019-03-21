import React, { Component } from 'react';
import logo from './logo.svg';

import BubbleChart from '@weknow/react-bubble-chart-d3';
import axios from 'axios';
import './App.css';

class Bubbles extends Component {
  constructor(props){
    super(props);
    this.state = {
      database: [],
    }
  }

  componentDidMount() {
    axios.get("https://bubl-team-x.herokuapp.com/api/hashtags")
      .then(res => {
        this.setState({ database: res.data })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">Interests</h1>
        <br />
        <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          data={this.state.database}
        />
      </div>
    );
  }
}

export default Bubbles;