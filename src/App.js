import React, {Component} from 'react';
// import axios from 'axios';
import './reset.css'
import './App.css';
import Recipes from './Components/Recipes'


class App extends Component {
  constructor(){
    super();

    this.state = {
      recipes: []
    }
  }


render(){
  return (
    <div>
      <h1>Working</h1>
      <Recipes/>
  <p></p>
    </div>
  )
}


}


export default App;
