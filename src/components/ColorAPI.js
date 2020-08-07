import React, {useEffect, useState} from 'react'
// import axios from 'axios';

const url = 'http://www.thecolorapi.com/id?hex=';

const hex = ['002060', 'dab5e3', '002060', '013bad', 'e6f7f8'];

const getColors = async colors => {
  const results = [];
  for (const color in colors) {
    try {
      const res = await fetch(`${url}${color}`);
      const data = await res.json();
      results.push(data);
    } catch (err) {
      console.log(err);
    }
  }
  return results;
};

export const ColorAPI = props => {
    function SearchResults() {
        const [data, setData] = useState({ colors: [] });
        const [loading, setLoading] = useState(true);

        const [query, setQuery] = useState('ffffff');
      
        useEffect(() => {
          async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            const item = data.results[0];
            setData(item);
            setLoading(false);
          }
          fetchData();
          return {data, loading};
        }, [data, loading]);
          
      }

        // useEffect(() => {
        //   let ignore = false;
      
        //   async function fetchData() {
        //     const result = await axios(url + query);
        //     if (!ignore) setData(result.data);
        //   }
      
        //   fetchData();
        //   return () => { ignore = true; }
        // }, [query]);


    return (
        <div>
            <div>The color is {getColors(hex)}</div>
        </div>
    )
}

export default ColorAPI

// // //Fetch API
// fetch(url)
//   .then(response => response.json())
//   .then(color => console.log(color));
