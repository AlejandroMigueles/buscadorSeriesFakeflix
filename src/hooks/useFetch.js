import { useEffect, useState } from 'react'

const APIEndpoint = 'https://api.tvmaze.com/'

export const useFetch = params => {
  const [isLoading, setIsLoading] = useState(true) // Estado de carga
  const [error, setError] = useState(false) // estado de error
  const [data, setData] = useState(null) // estado de datos
  // estado de datos capítulos

  // ahora creamos una subfuncion para hacer la peticion a la API
  // esta funcion además cambia el estado del loadind y el error
  const fetchMovie = url => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(respuestaJson => {
        if (respuestaJson.length === 0) {
          setError(true)
        } else {
          setData(respuestaJson || respuestaJson?.data)
          setIsLoading(false)

          console.log('data:', respuestaJson)
        }
      })
      .catch(error => console.log(error))
  }
  // ahora llamamos a la funcion fetchMovie con un useEffect
  useEffect(() => {
    fetchMovie(APIEndpoint + params)
  }, [params])
  return { isLoading, error, data }
}
