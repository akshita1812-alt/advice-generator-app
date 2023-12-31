import './App.css'
import Container from "./components/Container";
import { useState, useEffect } from 'react'

function App() {
  const[advice, setAdvice] = useState([]);
  const apiUrl = "https://api.adviceslip.com/advice";

  const handleClick = async() =>{
   const res =await fetch(apiUrl)
   const data = await res.json()
    console.log(data.slip)
   setAdvice(data.slip)
  }
useEffect(() => {
  handleClick()
}, [])

  
  return (
    <>
 <Container handleClick={handleClick} advice={advice}></Container> 
 </>
  )

}
export default App
