import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import DefaultImage from '../img/noImage.png'

const ItemEpisode = () => {
  const { id } = useParams()
  const { episodeData } = useFetch(`shows/${id}/episodes`)
  const poster = episodeData?.image?.original === undefined ? DefaultImage : episodeData?.image?.original

  return (
    <>
      <div className='card' style={{ width: '18rem' }}>
        <img className='card-img-top' src={poster} alt='Card image cap' />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href='#' className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default ItemEpisode
