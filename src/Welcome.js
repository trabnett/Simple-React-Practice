import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Your Name Please"
        }
    };

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setName(this.state.name)
    }
    render(){
        return(
            <div className="welcome">
                <h1>{this.state.name}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label onChange={this.handleChange}>
                            Please enter your name to continue:
                            <div className="name-input">
                                <input type="text" name="name" />
                                <div>
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </label>
                    </form>
            </div>
        )
    }


}

export default Welcome;