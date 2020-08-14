import React, {useEffect, useState} from "react";
// import axios from "axios";
import { Box, Text } from "grommet";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer1 from "./components/Footer";
import ColorInfo from "./components/ColorInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
import colors from './colors.json'

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
  })

  return (
    <Box alignContent="center" className="App">
      <Header />
	  
      <Switch>
        {/* <Route path={"/"} exact component={Home} /> */}
        <Route exact path={"/"}>
          <Home colors={colors}/>
        </Route>
        <Route path="/about" component={About} />
        <Route path={"/:id"}>
          <ColorInfo colors={colors} />
        </Route>
        {/* <Route path={"/:cn"} component={ColorInfo} /> */}
      </Switch>
	  

      <Footer1 />
    </Box>
  );
}

export default App;

// const renderColors = data => {
// 	const colors = data.results;
//   console.debug({ colors });
//   return colors.map(color => {
// 		return (ul.innerHTML += `
//     <li>
//       <img src="${color.picture.medium}" />
//       <p>${color.name.first} ${user.name.last}</p>
//       <div>${color.email}</div>
//     </li>`);
// 	});
// };

// const url = "https://randomuser.me/api/?results=10";
// fetch(url)
// 	.then(response => response.json())
// 	.then(renderColors);