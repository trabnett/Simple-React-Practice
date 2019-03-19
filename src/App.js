import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'
import Header from './Header'
import Form from './Form'
import CommentCard from './CommentCard'
import store from "./store";
import { addComment } from "./actions";
import { addName } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        noName: true,
        entryShow: false,
        counter: 0
      }
  };
  triggerCounter = () => {
    this.setState({counter: (this.state.counter + 1)})
  }
  setName = (x) => {
    store.dispatch( addName({ name: x }) )
    this.setState({noName: false})
  }
  handleClick = () => {
    this.setState({entryShow: true})
  }
  logout = () => {
    this.setState({noName: true})
  }
  formEnter = (e) => {

      store.dispatch( addComment({ e }))
      this.triggerCounter()
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
 

  render() {
    let output = this.sortComments(store.getState().comments)
    console.log(output, "<============")
    if (this.state.noName) {
      return(
        <Welcome setName={this.setName}/>
      )
    }
    if (!this.state.entryShow){
      return (
        <div>
          <Header name={store.getState().name} logout={this.logout}/>
          <div className="App-body">
            <p>
              Hello {store.getState().name}! Welcome to my app!
            </p>
            <button onClick={this.handleClick}>do you want do make an comment?</button>
          </div>
        </div>
      );

    } else if (output) {
      return(
        <div>
          <Header name={store.getState().name} logout={this.logout}/>
          <div className="App-body">
            <p>Okay, Lets make a comment!</p>
            <Form formEnter={this.formEnter}/>
            <button onClick={this.triggerCounter}></button>
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
          <Header name={store.getState().name} logout={this.logout}/>
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
