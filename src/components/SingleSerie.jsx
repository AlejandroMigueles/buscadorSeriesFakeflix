import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const SingleSerie = () => {
  const { id } = useParams()
  const { data } = useFetch(`shows/${id}?embed=cast`)

  //const { name, image, language, genres, summary } = data
  return (
    <>
      <h1>Titulowpsd</h1>
      <div className='single-movie'>
        <img src={data?.image?.medium} />
        <div className='single-info'>
          <h2>{data?.name}</h2>
          {data?.summary}
          <p><strong>Language: </strong>{data?.language}</p>
          <p><strong>Genres: </strong>{data?.genres.join(', ')}</p>
        </div>
      </div>
    </>

  )
}

export default SingleSerie
