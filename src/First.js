import React from 'react';

const First = ({students}) => {
  
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

export default First;