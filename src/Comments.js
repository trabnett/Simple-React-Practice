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



    render(){
        if (this.props.positive_comments){
            console.log("====>", this.props.positive_comments)
            
            return(
                <h1 className="basic">{this.props.positive_comments[0].comment}</h1>
            )
        }


        
    }

    


}

export default Comments;
