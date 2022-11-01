import React from 'react'
import "./Akatsuki.scss";

const Akatsuki = (props) => {

  return (
    <div>
    <h1 className='akatsuki'>Akatsuki</h1>
    <h2>Digan lo que digan, {props.member} es el boss</h2>
    <h4>Color: {props.color}</h4>
    </div>
  )
}

export default Akatsuki;