import React, { Component } from 'react';

class First extends Component {

    render() {
        //console.log(this.props);
        //const { subject, dept, college } = this.props;

        const { students } = this.props;
        const studentList = students.map(student => {
            return(
                <div className="student" key = {student.id}>
                    <div>Subject : { student.subject } </div>
                    <div>Dept : { student.dept }</div>
                    <div>College : { student.college }</div>
                </div>
            )
        })

        return(
            <div className="student-list">
                {studentList}
            </div>
        )

    }
}

export default First;