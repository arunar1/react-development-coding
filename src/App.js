import React,{Component} from 'react';
import './App.css';


import Hello from './components/Hello'

import Message from './components/Message'

import Counter from './components/Counter';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Hello/>
      <Message  />
      <Counter/>
    </div>
  );
  }
}
export default App;