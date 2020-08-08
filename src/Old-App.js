import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./styles.css";

export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios("https://www.thecolorapi.com/id?hex=99C4B9");
			setData(result.data);
		};
		fetchData();
	}, []);

	const colors = () => {
		return Object.keys(data);
	};

	return (
		<div className="App">
			<h1>{data.hex.value}</h1>
			<img src={data.image.bare} />
			<ul>
				<li>{data.hex.value}</li>
				<li>
					{data.rgb.r}
					{data.rgb.g}
					{data.rgb.b}
				</li>
				{/* {Object.keys(data).map(color => (
					<li key={color}>
						<a href={color.href}>{data.hex.value}</a>
					</li>
				))} */}
			</ul>
		</div>
	);
}



// import React, { useEffect, useState} from 'react';
// import ColorAPI from './components/ColorAPI'
// import './styles/App.css';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(url);
//       const data = await response.json();
//       const item = data.results[0];
//       setData(item);
//       setLoading(false);
//     }
//     fetchData();
//   }, [url]);
//     return {data, loading};
// }

// function App() {
//   const {data, loading} = useFetch('https://api.randomuser.me')
//   // I don't understand this line above

//   // const updateCount = () => {
//   //   setCount(count + 1);
//   // }

//   return (
//     <div className="App">
//       {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
//       <ColorAPI/>
//     </div>
//   );
// }

// export default App;
