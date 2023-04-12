import React,{Component} from 'react';
import './App.css';


import Message from './components/Message'

import Counter from './components/Counter';

import Stylesheet from './components/Stylesheet';

import Form from './components/Form';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Message  />
      <h1>hi</h1>
      <Counter/>
      <Stylesheet/>
      <Form/>
    </div>
  );
  }
}
export default App;