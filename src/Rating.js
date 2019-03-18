import React, { Component } from 'react';


class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 3
        }

    };
    handlePositiveClick = () => {
        this.props.handlePositiveClick()
    }
    handleNegativeClick = () => {
        console.log("nope")
    }

    render(){
        return(
            <div>
                <button onClick={this.handlePositiveClick()}>-</button><td>Hey</td><button onClick={this.handlePositiveClick()}>+</button>
            </div>
        )
    }


}

export default Rating;