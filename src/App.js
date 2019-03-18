import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'
import Header from './Header'
import Form from './Form'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noName: true,
        name: "",
        positive_comments: [{comment:"hey yall", rating: 5}, {comment: "whaaaat", rating: 4}],
        negative_comments: [{comment: "not good", rating: 2}, {comment: "even worse", rating: 1}],
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
  formEnter = (e) => {
    if (e.rating > 2){
      this.setState({positive_comments: [...this.state.positive_comments, e]}, () => {
        console.log(this.state.entries)
      })
    } else {
      this.setState({negative_comments: [...this.state.negative_comments, e]})
    }

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

    } else if (this.state.positive_comments && this.state.positive_comments.length > 0) {
      return(
        <div>
          <Header name={this.state.name} logout={this.logout}/>
          <div className="App-body">
            <p>Okay, Lets make a comment!</p>
            <Form formEnter={this.formEnter}/>
            <Comments positive_comments={this.state.positive_comments} negative_comments={this.state.negative_comments}/>
          </div>
        </div>
      )} else {
        return (
          <div>
          <Header name={this.state.name} logout={this.logout}/>
          <div className="App-body">
            <p>Okay, Lets make a comment!</p>
            <Form formEnter={this.formEnter}/>
          </div>
          </div>
        )

      }
  }
}

export default App;
