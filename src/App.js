import React,{Component} from 'react';
import './App.css';


import Message from './components/Message'

import Counter from './components/Counter';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Message  />
      <h1>hi</h1>
      <Counter/>
    </div>
  );
  }
}
export default App;