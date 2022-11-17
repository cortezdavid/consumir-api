import React from 'react'
import { useState } from "react"
import './ConectarApi.css'
import Detalles from '../Detalles/Detalles'
import BotonAxios from '../BotonAxios/BotonAxios'
import BotonAsync from '../BotonAsync/BotonAsync'
import BotonFetch from '../BotonFetch/BotonFetch'



const ConectarApi = () => {

    const [personajes, setPersonajes] = useState(null)
    const [api, setApi] = useState('')

    return (
        <>
            {
                personajes ? (
                    <>
                        <h1>Consumiendo api de Breaking Bad desde {api}</h1>
                        <div className='characterContainer'>
                            {personajes.map(personaje => <Detalles key={personaje.char_id} personaje={personaje} />)}
                        </div>
                    </>
                ) : (
                    <div className='methodContainer'>
                        <BotonAsync setPersonajes={setPersonajes} setApi={setApi} />
                        <BotonFetch setPersonajes={setPersonajes} setApi={setApi} />
                        <BotonAxios setPersonajes={setPersonajes} setApi={setApi} />
                    </div>
                )
            }
        </>
    )

}

export default ConectarApi