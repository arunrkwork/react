import React, { Component } from 'react'

class AddSubject extends Component {

    state = {
        subject: null,
        dept: null, 
        college:  null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addSubject(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="" id="subject" onChange={this.handleChange} placeholder="subject"/><br/><br/>
                    <input type="text" name="" id="dept" onChange={this.handleChange} placeholder="dept"/><br/><br/>
                    <input type="text" name="" id="college" onChange={this.handleChange} placeholder="college"/><br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddSubject