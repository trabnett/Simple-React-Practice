import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const obj = {comment: this.state.comment, rating: 3}
        this.props.formEnter(obj)

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