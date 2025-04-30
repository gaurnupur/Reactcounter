import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //App({counter}) writing counter as passsing parameter in app({counter })will not bring change in ui therefore we need hooksss
  

//hoook ->usestate    setcounter is the ftn handling counte rvariable
  let [counter,setcounteradd]=useState(0)

  const addvalue=()=>{
    //counter=counter+1 will not work in ui we need hook
    setcounteradd(counter+1);
  }

  const removevalue=()=>{
    //counter=counter+1 will not work in ui we need hook
    setcounteradd(counter-1);
  }

  return (
    <>
      <h1>NUPUR AND REACT</h1>
      <h2>counter:{counter}</h2> 
    
      <button onClick={addvalue} className="my-button"  >Add value{counter}</button>
      <br/>
      
      <button onClick={removevalue}>Remove value {counter}</button>  
      
        
    </>
  )
}

export default App



//assignment to limit remove to 0 and add to 20
