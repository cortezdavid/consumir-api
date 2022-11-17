import React from 'react'
import './Detalles.css'

const Detalles = (props) => {
  const { id, personaje } = props
  return (
    <div key={id} className='card'>
      <img src={personaje.img} alt={personaje.name} className='characterImg'></img>
      <p><span>Nombre:</span> {personaje.name}</p>
      <p><span>Apodo:</span> {personaje.nickname}</p>
    </div>
  )
}

export default Detalles