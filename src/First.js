import React from 'react';

const First = ({students, deleteSubject}) => {       

         return( 
             <div className="student-list">
                 {
                    students.map(student => {
                        return student.id > -1 ? (
                            <div className="student" key = {student.id}>
                                <div>Id : { student.id } </div>
                                <div>Subject : { student.subject } </div>
                                <div>Dept : { student.dept }</div>
                                <div>College : { student.college }</div>
                                <button onClick={() => {deleteSubject(student.id)}}>Delete</button>
                            </div>
                        ) : (null)
                    }) 
                 }
             </div>
         )
 
}

export default First;