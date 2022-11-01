import React from 'react'
import Parrafo1 from '../components/Atoms/Parrafo1';
import "./Characters.scss";

const Characters = () => {
  return (
    <div>
    <div className='characters'>Characters</div>
    <Parrafo1 texto="CHARACTERS" />
    </div>
  )
}

export default Characters;