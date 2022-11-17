import React from 'react'
import axios from 'axios'

const BotonAxios = (props) => {

    const { setPersonajes, setApi } = props

    const getAxios = async () => {
        try {
            const datos = await axios(`https://breakingbadapi.com/api/characters?limit=10&offset=0`)
            setPersonajes(datos.data)
            setApi("Axios")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='methodCard'>
            <img src="./img/axios.png" alt="Axios" className='methodImg' />
            <button onClick={getAxios}>Axios</button>
        </div>


    )
}

export default BotonAxios