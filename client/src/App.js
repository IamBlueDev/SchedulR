import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import OAuth from './OAuth/OAuth.js';
const socket = io('http://localhost:3001/');
class App extends React.Component {

  componentDidMount() {
    fetch(`http://localhost:3001/wake-up`)
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false })  
        }
      })
  }
  render() {
  return (
    <div className="App">
      <OAuth
        provider='facebook'
        key='facebook'
        socket= {socket}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
}

export default App;
