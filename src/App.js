import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Login from './components/login';
import Navbar from './components/Navbar';
import Jokes from './components/Jokes';
function App() {
  return (
    <div className="App">

    <Router>
    <Link to="">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/form">Form</Link>

    <Route exact path="/" component={Login}/>
    <Route path="/about" component={Navbar}/>
    <Route path="/form" component={Jokes}/>


      {/* <Login /> */}
      {/* <Navbar/> */}
    </Router>
    </div>
  );
}

export default App;