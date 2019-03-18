import React, { Component } from 'react';
import Rating from './Rating'
import CommentCard from './CommentCard'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positive_comments: [],
            negative_comments: []
        }
    };


    handlePositiveClick = () => {
        console.log("hello")
        // this.props.handlePositiveClick()

    }


    render(){
        return(
            <div className="comment-section">
                <div>{this.props.positive_comments.map(function(comment, idx){
                    return(
                        <tr key={idx}>
                            <CommentCard data={comment} handlePositiveClick={this.props.handlePositiveClick}/>
                        </tr>
                    )
                })}</div>
                <div>{this.props.negative_comments.map(function(comment, idx){
                    return(
                        <tr key={idx}>
                            <td>{comment.comment}</td>

                        </tr>
                    )
                })}

                </div>
            </div>
        )



        
    }

    


}

export default Comments;
