import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "bob"
        }
    };

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleSubmit = () => {
        this.props.setName(this.state.name)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label onChange={this.handleChange}>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h1>{this.state.name}</h1>
            </div>
        )
    }


}

export default Welcome;