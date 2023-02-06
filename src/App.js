import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";
// var data = require("./img.json");

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list").then((res) => setData(res.data));
  }, []);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://picsum.photos/v2/list")
  //     .then(res => res.json())
  //     .then((result) => { 
  //       setData(result); 
  //     })
  // }, [])
  // console.log(data)

  return (
    <div style={{ paddingLeft: "4px" ,height: "150px"}}>
      <h1>Everyone's photos</h1>
      <div className="grid-container">
        {data && data.slice(15).map(item => (
          <Card key={item.id}  download_url={item.download_url} />
        ))}
      </div>
    </div>
  );
}

export default App;
