import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project';


function App() {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)

 const getData = async()=>{
  setLoading(true)

  try {
    
    const res = await fetch(url)
    const places = await res.json()
    setPlaces(places)

  } catch (error) {
    console.log(error);
  }

  }

console.log(places)

useEffect(() => {
  getData()

}, [])

if(loading){
  return <main><Loading/> </main>
}else{
  <Tours/>
}

  return <div>
<h2>Our Tours</h2>
<Tours places={places}/>


       </div>

}
export default App
