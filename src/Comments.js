import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positive_comments: [],
            negative_comments: []
        }
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const obj = {comment: this.state.comment, rating: 0}
        this.props.formEnter(obj)
        this.setState({positive_comments: [...this.state.positive_comments, obj]})

    }
    handleChange = (e) => {
        this.setState({comment: e.target.value})
    }

    handleNegativeClick = (e, type) => {

    }
    handlePositveClick = () => {
        console.log(this)

    }

    render(){
        return(
            <div className="comment-section">
                <div>{this.props.positive_comments.map(function(comment, idx){
                    return(
                        <tr key={idx}>
                            <td>{comment.comment}</td>
                            <button>-</button><td>{comment.rating}</td><button>+</button>
                        </tr>
                    )
                })}</div>
                <div>{this.props.negative_comments.map(function(comment, idx){
                    return(
                        <tr key={idx}>
                            <td>{comment.comment}</td>
                            <button>-</button><td>{comment.rating}</td><button>+</button>

                        </tr>
                    )
                })}

                </div>
            </div>
        )



        
    }

    


}

export default Comments;
