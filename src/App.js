import React, { useState, useEffect } from "react";
// import axios from "axios";
import {Box, Text} from 'grommet'
import "./styles/App.css";

import MainSwatches from './components/MainSwatches'
import FooterNav from './components/FooterNav'

function App() {

	return (
		<Box alignContent="center" className="App">
			<Text >Colors!</Text>
			<MainSwatches/>
			<FooterNav/>
        </Box>
  );
}

export default App;
