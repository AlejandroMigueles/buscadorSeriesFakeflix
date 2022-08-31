import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import DefaultImage from '../img/noImage.png'
// import Episodes from './Episodes'

const SingleSerie = () => {
  const { id } = useParams()
  const { data } = useFetch(`shows/${id}?embed=cast`)
  const poster = data?.image?.original === undefined ? DefaultImage : data?.image?.original

  return (
    <>
      <div className='single-movie'>
        <img src={poster} />
        <div className='single-info'>
          <h2 className='summary'>{data?.name}</h2>
          <p className='summary'>{data?.summary.replace(/<[^>]+>/g, '')}</p>
          <p><strong>Language: </strong>{data?.language}</p>
          <p><strong>Genres: </strong>{data?.genres.join(', ')}</p>
        </div>
      </div>
      {/* <Episodes /> */}
      <div className='row container'>
        <h3>Cast</h3>
        {
          data?._embedded.cast.map(actor => (
            <div className='container col-md-3' key={actor.person.name}>
              <div className='card' style={{ width: '18rem' }}>
                <img src={actor.character?.image?.medium == null ? DefaultImage : actor.character?.image?.medium} alt={actor.person.name} className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>{actor?.person?.name} como {actor?.character?.name}</h5>
                  <a href='#' className='btn btn-primary'>Go somewhere</a>
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </>

  )
}

export default SingleSerie
