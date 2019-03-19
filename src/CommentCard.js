import React, { Component } from 'react';
import store from './store';
import { changeRating } from "./actions";


class CommentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.data.comment,
            rating: this.props.data.rating,
            id: this.props.data.id
        }

    };
    handlePositiveClick = (e) => {
        if (this.props.data.rating < 5){
            let num = this.props.data.rating + 1
            this.setState({rating: num}, () => {
                store.dispatch(changeRating ({rating: num, id: this.props.data.id}))
            }) 
            }          
    }
    handleNegativeClick = (e) => {
        if (this.props.data.rating > 0){
            let num = this.props.data.rating - 1
            this.setState({rating: num}, () => {
                store.dispatch(changeRating ({rating: num, id: this.props.data.id}))
            }) 
        }
    }


    render(){
        store.subscribe(() => this.setState({comment: this.props.data.comment, rating: this.props.data.rating}))
            return(
                <div classname="card">
                    <h1>{this.props.data.comment}</h1>
                    <div className="card-button">
                        <button className="button" onClick={this.handlePositiveClick}>+</button><td>{this.props.data.rating}</td><button className="button" onClick={this.handleNegativeClick}>-</button>
                    </div>
                </div>
            )

    }


}

export default CommentCard;