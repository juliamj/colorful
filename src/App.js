import React from "react";
// import axios from "axios";
import "./styles/App.css";
import "./styles/Header.css";
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import ColorInfo from "./components/ColorInfo";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
	
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path="/about" component={About}  />
          <Route path={"/:hexcode"} component={ColorInfo} />
        </Switch>
      </div>
    </Router >
  );
}



export default App;


