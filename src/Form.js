import React, { Component } from 'react';
import store from "./store";
import { addComment } from "./actions";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
    };
    handleSubmit = (e) => {
        e.preventDefault()
        let id = store.getState().comments.length +1
        const obj = {id: id, comment: this.state.comment, rating: 3}
        this.props.formEnter(obj)
        this.setState({comment: ""})

    }
    handleChange = (e) => {
        this.setState({comment: e.target.value})
    }

    render(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Comment:
              <textarea value={this.state.comment} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }


}

export default Form;