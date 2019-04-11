import React, { Component } from 'react';

class First extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="first">
                <div>Subject : {this.props.subject}</div>
                <div>Dept : {this.props.dept}</div>
                <div>College : {this.props.college}</div>
            </div>
        )

    }
}

export default First;