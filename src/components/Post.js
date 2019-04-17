import React, { Component } from 'react'

class Post extends Component {

    state = {
        id: null
    }

    componentDidMount() {
       // console.log(this.props);
        let id = this.props.match.params.post_id;

        this.setState({
            id: id            
        })
        
    }
    
    render() {
       return(
            <div className="container">
                <h4>Route Parameter </h4>
                <h5>{ this.state.id }</h5>
            </div>
       )
    }

}

export default Post