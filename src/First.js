import React from 'react';

const First = ({students}) => {
  
        // using if else

        // const studentList = students.map(student => {

        //     if(student.id > 2) {

        //         return(
        //             <div className="student" key = {student.id}>
        //                 <div>Id : { student.id } </div>
        //                 <div>Subject : { student.subject } </div>
        //                 <div>Dept : { student.dept }</div>
        //                 <div>College : { student.college }</div>
        //             </div>
        //         )

        //     } else {
        //         return null
        //     }
        // })

        // using ternary operator

        // const studentList = students.map(student => {
        //    return student.id > 2 ? (
        //         <div className="student" key = {student.id}>
        //                  <div>Id : { student.id } </div>
        //                  <div>Subject : { student.subject } </div>
        //                  <div>Dept : { student.dept }</div>
        //                  <div>College : { student.college }</div>
        //              </div>
        //     ) : (null)
        // })

        // return(
        //     <div className="student-list">
        //         {studentList}
        //     </div>
        // )

        // assing directly to the output jsx
  
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
                            </div>
                        ) : (null)
                    }) 
                 }
             </div>
         )
 
}

export default First;