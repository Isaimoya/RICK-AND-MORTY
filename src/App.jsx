
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFect from './hook/useFect'
import InfoLocation from './componet/InfoLocation'
import CardResident from './componet/CardResident'

function App() {

  const [locaTionId, setlocaTionId] = useState(Math.floor(Math.random() * 126) + 1)


  const url = `https://rickandmortyapi.com/api/location/${locaTionId}`
  const [location, getLocation, isLoading,hasError] = useFect(url)

  useEffect(() => {
    getLocation()
  }, [locaTionId])

  const inputlocation = useRef()

  const handlelocation = e => {
    e.preventDefault()
    setlocaTionId(inputlocation.current.value.trim())
  }

  console.log(location);
  return (
    <div className='app'>
      <h1 className='app_tittle'>Rick and Morty</h1>
      <form className='app_form' onSubmit={handlelocation}>
        <input className='app_input' ref={inputlocation} type="text" />
        <button className='app_btn'>Search</button>
      </form>
      {
        isLoading
        ? <h2>loading...</h2>
        :
        hasError || locaTionId === '0'
        ?<h2>Hey you must provide an id from 1 to 126</h2>
        :(
        <>
      <InfoLocation location={location} />
      <div className='app_card-container'>
        {
          location?.residents.map(url => (

            <CardResident
              key={url}
              url={url}

            />
          ))

        }
      </div>
        </>
  )
    }
    </div>
  )
}

export default App
