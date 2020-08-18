import React, { useState } from "react";
// import axios from "axios";
import { Box } from "grommet";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer1 from "./components/Footer";
import ColorInfo from "./components/ColorInfo";
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import axios from 'axios'
import colors from "./colors.json";

// import MainSwatches from './components/MainSwatches'
// import FooterNav from './components/FooterNav'

function App() {
  const [color, setColor] = useState([]);
  // useEffect(() => {
  // 	const fetchColor = async () => {
  // 		const color = await axios
  //       .get('https://colors.herokuapp.com/colors')
  //       .then(result => result.data)
  //     return color;

  // 	};
  // 	fetchColor().then(res => setColor(res));
  // }, []);

  Object.entries(colors).map((color, index) => {
    return color;
  });

  return (
    <Box alignContent="center" className="App">
      <Header />

      <Switch>
        <Route exact path={"/"}>
          <Home colors={colors} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path={"/color-:id"}>
          <ColorInfo colors={colors} />
        </Route>
      </Switch>

      <Footer1 />
    </Box>
  );
}

export default App;