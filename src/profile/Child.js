import React from 'react'
import PropsTypes from 'prop-types'
const Child=(props)=>{
    console.log(props)
    const{
        fullName,
        bio,
        profession,
        handleName,
        imgSrc,
        name,
           
        
     }=props
    return(
        <div> 
          <h4><span style={{color:"blue"}}>   About me :</span> </h4>
          <img class="avatar rotate" src={imgSrc} alt={name} width="300" height="300" />
          {/* {handleName(fullName)} */}
            <h1> {fullName}</h1>
            <div>
               <ul>
          {bio.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <h2>{profession}</h2>
      <button onClick={() => handleName(fullName)}>Click Here</button>
        </div>
        
      
    )
    
}

Child.defaultProps={
  fullName:"this is the default title"
}

Child.propsTypes={
  fullName:PropsTypes.string.isRequired,
  bio:PropsTypes.arrayOf(PropsTypes.string),
  profession:PropsTypes.string,
  handleAlert:PropsTypes.func
}

export default Child 