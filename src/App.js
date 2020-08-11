import React from "react";
// import axios from "axios";
import { Box, Text } from "grommet";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer1 from "./components/Footer";
import ColorInfo from "./components/ColorInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import MainSwatches from './components/MainSwatches'
// import FooterNav from './components/FooterNav'

function App() {
  return (
    <Box alignContent="center" className="App">
      <Header />
	  
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path="/about" component={About} />
        <Route path={"/:hexcode"} component={ColorInfo} />
      </Switch>
	  

      <Footer1 />
    </Box>
  );
}

export default App;
