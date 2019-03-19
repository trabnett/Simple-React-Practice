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
            <h2>
              Hello {store.getState().name}! Welcome to my app!
            </h2>
            <button onClick={this.handleClick}>do you want do make an comment?</button>
          </div>
        </div>
      );

    } else if (output) {
      store.subscribe(() => {this.triggerCounter()})
      console.log(store.getState(), "<========")
      return(
        <div>
          <Header name={store.getState().name} logout={this.logout}/>
          <div className="App-body">
            <h2>Okay, Lets make a comment!</h2>
            <Form formEnter={this.formEnter}/>
            <div className="tables">
                <table className="table">
                  <tr>
                    <th>Positive Comments</th>
                    <th>Negative Comments</th>
                  </tr>
                    <td>{output.positive_comments.map(function(comment, idx){
                          return(
                              <tr key={idx}>
                                  <CommentCard data={comment} />
                              </tr>
                          )
                      })}
                    </td>
                  <td>{output.negative_comments.map(function(comment, idx){
                          return(
                              <tr key={idx}>
                                  <CommentCard data={comment} />
                              </tr>
                          )
                      })}
                    </td>
                </table>
              </div>
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
