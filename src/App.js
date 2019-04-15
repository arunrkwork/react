import React, { Component } from 'react';
import First from './First';
import AddSubject from './AddSubject';

class App extends Component {

  state = {
    students : [
        { id: 1, subject: 'Java', dept: 'MCA' , college: 'KSRCAS'} ,
        { id: 2, subject: 'Python', dept: 'MSC' , college: 'KSRCAS'} ,
        { id: 3, subject: 'Sql', dept: 'MSC IT' , college: 'KSRCAS'} ,
        { id: 4, subject: 'Android', dept: 'MSC CS' , college: 'KSRCAS'} ,
        { id: 5, subject: 'BlockChain', dept: 'MCA' , college: 'KSRCAS'} 
    ]
  }

  addSubject = (data) => {
      //console.log(student);
      data.id = Math.random();
      //this.students.push(student);
      let result = [...this.state.students, data];
      
      this.setState({
        students: result
      })
      console.log(result);
  } 

  render() {
    return (
      <div className="App">
         <h1>Sample Page</h1>
         <First students = { this.state.students }/> 
         <br/>
         <AddSubject addSubject={this.addSubject}/>
      </div>
    );
  }
}

export default App;



