import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


function App() {
 const [jokes, setJokes] = useState([]);
 useEffect(() => {
   axios.get("/api/jokes")
   .then((res) => {
    setJokes(res.data);
   })
   .catch((error) => {
    console.log(error);
   })
 },[])
  return (
    <>
      <h1>Code and backend</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke)=>(
        <div key={joke.id} style={{display:'flex',flexDirection:"column",border:"1px solid red"}}>
          <div style={{background:'lightgreen',color:"black"}}>
          <h4>{joke.title}</h4>
          <p>{joke.contant}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default App
