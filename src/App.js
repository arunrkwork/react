import React, { Component } from 'react';
import First from './First';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Sample Page</h1>
         <First subject='python' dept="mca" college="ksrcas" />
         <First subject='java' dept="mca" college="ksrcas" />
         <First subject='android' dept="mca" college="ksrcas" />
      </div>
    );
  }
}

export default App;
