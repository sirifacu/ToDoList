import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import TodoDetail from './components/TodoDetail';


export function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddTodo} />
      <Route path="/edit/:id" component={TodoDetail} />
    </div>
  );
}

export default App;
