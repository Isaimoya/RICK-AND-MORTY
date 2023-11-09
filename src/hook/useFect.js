import axios from 'axios'
import { useState } from 'react'

const useFect = (url) => {

  const[infoApi, setinfoApi] = useState ()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const getApi = () => {
    setIsLoading(true)
    axios.get(url)
    .then(res => {
        setinfoApi(res.data)
        setHasError(false)
  })
    .catch(err => {
     console.log(err)
     setHasError(true)
  })    
    .finally(() =>setIsLoading(false))
    
  }
return [infoApi, getApi, isLoading, hasError]
}

export default useFect