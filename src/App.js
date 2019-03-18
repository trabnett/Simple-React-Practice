import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'
import Header from './Header'
import Form from './Form'
import Comments from './Comments'
import CommentCard from './CommentCard'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noName: true,
        name: "",
        comments: [{comment:"hey yall", rating: 5}, {comment: "whaaaat", rating: 4}, {comment: "not good", rating: 2}, {comment: "even worse", rating: 1}],
        current_entry: "",
        entryShow: false,
        counter: 1
      }
  };
  setName = (x) => {
    this.setState({name: x, noName: false})
  }
  handleClick = () => {
    this.setState({entryShow: true})
  }
  logout = () => {
    this.setState({noName: true, comments: []})
    console.log(this.state)
  }
  formEnter = (e) => {
      this.setState({comments: [...this.state.comments, e]})
  }
  sortComments = (comments) => {
    let output = {positive_comments: [], negative_comments: []}
    comments.map(function(comment,i){
      if (comment.rating >= 3){
        output.positive_comments.push(comment)
      } else {
        output.negative_comments.push(comment)
      }
    })
    output.positive_comments.reverse()
    output.negative_comments.reverse()
    return output
  }
  handlePositveClick = (e) => {
    console.log(e.target.value)
  }
  positveButton = () => {

  }

  render() {
    let output = this.sortComments(this.state.comments)
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
            <button onClick={this.handleClick}>do you want do make an comment?</button>
          </div>
        </div>
      );

    } else if (output) {
      return(
        <div>
          <Header name={this.state.name} logout={this.logout}/>
          <div className="App-body">
            <p>Okay, Lets make a comment!</p>
            <Form formEnter={this.formEnter}/>
            <table className="positve">
              <tr>Positive Comments</tr>
              <div>{output.positive_comments.map(function(comment, idx){
                      return(
                          <tr key={idx}>
                              <CommentCard data={comment} />
                          </tr>
                      )
                  })}</div>
            </table>
            <table className="negative">
              <tr>Negative Comments</tr>
              <div>{output.negative_comments.map(function(comment, idx){
                      return(
                          <tr key={idx}>
                              <CommentCard data={comment} />
                          </tr>
                      )
                  })}</div>
            </table>
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
