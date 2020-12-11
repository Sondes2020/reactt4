import React from 'react'
import Child from './profile/Child'
import imgSrc from './profile/ChS.jpg';
import './App.css';

function App() {
  
  const handleName = (name) => alert(`Hi I am a ${name}`);
  return (
     <div className="App">
     
      <Child  
      imgSrc={imgSrc} name="ChS" 
      fullName='Sondes Chemingui'  
      bio= {[ "optimistic",
      "Sport&cooking",
     "sondes84chmingui@gmail.com"]}
      profession='Chemistry docteur'
      handleName={handleName}>
          </Child>
      
    </div>
   
  )
}

export default App;
