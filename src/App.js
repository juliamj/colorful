import React from "react";
// import axios from "axios";
import "./styles/App.css";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import  Footer1 from './components/Footer';
import ColorInfo from "./components/ColorInfo";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (

		<div className="pageContainer">
			<Header />
			<Router>
				<Switch>
					<Route path={"/"} exact component={Home} />
					<Route path="/about" component={About} />
					<Route path={"/:hexcode"} component={ColorInfo} />
				</Switch>
			</Router >
	
			<Footer1 className="footer"/>
		</div>
	);
}



export default App;


