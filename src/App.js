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

  render() {
    return (
      <div className="App">
         <h1>Sample Page</h1>
         <First students = { this.state.students }/> 
         <br/>
         <AddSubject/>
      </div>
    );
  }
}

export default App;



