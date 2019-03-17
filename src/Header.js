import React, { Component } from 'react';

class Header extends Component {

    render(){
        return(
            <div className="header-background">
                <header className="header">
                    <div className="user-name">{this.props.name}</div>
                    <button className="header-button" onClick={this.props.logout}>logout</button>
                </header>
            </div>
        )
    }


}

export default Header;