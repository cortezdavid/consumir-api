import React from 'react'

const BotonFetch = (props) => {

    const { setPersonajes, setApi } = props

    const getFetch = () => {
        fetch(`https://breakingbadapi.com/api/characters?limit=10&offset=0`)
            .then(res => res.json())
            .then(datos => setPersonajes(datos))
            .catch(error => console.log(error))
        setApi("Fetch")
    }

    return (
        <div className='methodCard'>
            <img src="./img/fetch.png" alt="fetch" className='methodImg' />
            <button onClick={getFetch}>Fetch</button>
        </div>

    )
}

export default BotonFetch