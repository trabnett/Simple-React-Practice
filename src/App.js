import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noName: true,
        name: "",
        entries: [],
        current_entry: "",
        entryShow: false
      }
  };
  setName = (x) => {
    this.setState({name: x, noName: false})
  }
  handleClick = () => {
    this.setState({entryShow: true})
  }
  logout = () => {
    this.setState({noName: true})
    console.log(this.state)
  }

  render() {
    if (this.state.noName) {
      return(
        <Welcome setName={this.setName}/>
      )
    }
    if (!this.state.entryShow){
      return (
        <div>
          <Header name={this.state.name} logout={this.logout}/>
          <div className="App-body">
            <p>
              Hello {this.state.name}! Welcome to my app!
            </p>
            <button onClick={this.handleClick}>do you want do make an entry?</button>
          </div>
        </div>
      );

    } else {
      return(
        <div>
          <Header name={this.state.name} logout={this.logout}/>
          <div className="App-body">
            <p>Okay, Lets make a comment!</p>
          </div>
        </div>



      )
    }
  }
}

export default App;
