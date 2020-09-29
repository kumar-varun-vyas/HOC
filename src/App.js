import React from 'react';
import BJP from './bjp';
import AAP from './aap';
import './App.css';

class App extends React.Component{

  render(){

    return(
      <React.Fragment>
        <h1>Higher Order Component</h1>
        <BJP candidate = "gopal joshi"/>
        <AAP candidate = "kejariwal "/>
      </React.Fragment>
    );
  }
}

export default App;
