import React from 'react'

const BotonAsync = (props) => {

    const { setPersonajes, setApi } = props

    const getAsync = async () => {
        try {
            const url = await fetch(`https://breakingbadapi.com/api/characters?limit=10&offset=0`)
            const datos = await url.json()
            setPersonajes(datos)
            setApi("Async")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='methodCard'>
            <img src="./img/async.png" alt="Async" className='methodImg' />
            <button onClick={getAsync}>Async</button>
        </div>
    )
}

export default BotonAsync