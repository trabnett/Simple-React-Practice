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
                <textarea className="form-textarea" value={this.state.comment} maxlength="90" placeholder="Type etiher a positive or negative comment here, and then rate how postive or negative it is."onChange={this.handleChange} />
            </label>
            <div>
                <input className="form-button" type="submit" value="Submit" />
            </div>
          </form>
        )
    }


}

export default Form;