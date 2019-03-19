import React, { Component } from 'react';
import store from './store';
import { changeRating } from "./actions";


class CommentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            rating: 0
        }

    };
    handlePositiveClick = (e) => {
        if (this.state.rating < 5){
            let num = this.state.rating + 1
            this.setState({rating: num}) 
            store.dispatch(changeRating ({rating: num, id: this.props.data.id}))

            }          
    }
    handleNegativeClick = (e) => {
        if (this.state.rating > 0){
            let num = this.state.rating - 1
            this.setState({rating: num}) 
            store.dispatch(changeRating ({rating: num, id: this.props.data.id}))
        }

    }
    componentDidMount(){
        this.setState({comment: this.props.data.comment, rating: this.props.data.rating})
    }

    render(){

            return(
                <div>
                    <h1>{this.props.data.comment}</h1>
                    <button onClick={this.handlePositiveClick.bind(this)}>+</button><td>{this.state.rating}</td><button onClick={this.handleNegativeClick}>-</button>
                </div>
            )

    }


}

export default CommentCard;