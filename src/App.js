import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noName: true,
        name: "",
        entries: [],
        current_entry: ""
      }
  };
  setName = (x) => {
    this.setState({name: x, noName: false})
  }

  render() {
    if (this.state.noName) {
      return(
        <Welcome setName={this.setName}/>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello {this.state.name}! Welcome to my app!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
