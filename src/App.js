import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { setAutoFreeze } from "immer";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (data.length == 0) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(data);
  return (
    <div className="App" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1>NASA Photo Of The Day</h1>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <img
        style={{ maxWidth: "100%", height: "auto" }}
        src={data.hdurl}
        alt={data.title}
      />
      <p>{data.explanation}</p>
    </div>
  );
}
export default App;
