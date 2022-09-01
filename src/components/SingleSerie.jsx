import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import DefaultImage from '../img/noImage.png'

const SingleSerie = () => {
  const { id } = useParams()
  const { data: dataSeries } = useFetch(`shows/${id}?embed=cast`)
  const { data: episodeData } = useFetch(`shows/${id}/episodes`)
  const poster = dataSeries?.image?.original === undefined ? DefaultImage : dataSeries?.image?.original

  return (
    <>
      <div className='single-movie'>
        <img src={poster} />
        <div className='single-info'>
          <h2 className='summary'>{dataSeries?.name}</h2>
          <p className='summary'>{dataSeries?.summary.replace(/<[^>]+>/g, '')}</p>
          <p><strong>Language: </strong>{dataSeries?.language}</p>
          <p><strong>Genres: </strong>{dataSeries?.genres.join(', ')}</p>
        </div>
      </div>

      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
              Accordion Item #1
            </button>
          </h2>
          <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <div className='episodes container'>
                {episodeData?.map(episode => (
                  <div className='episode' key={episode.id}>
                    <img src={episode.image?.medium == null ? DefaultImage : episode.image?.medium} />
                    <div className='episode-info'>
                      <h3>{episode.name}</h3>
                      <p>{episode.summary.replace(/<[^>]+>/g, '')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
              Accordion Item #2
            </button>
          </h2>
          <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
              Accordion Item #3
            </button>
          </h2>
          <div id='collapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <div className='row container'>
        <h3>Cast</h3>
        {
          dataSeries?._embedded.cast.map(actor => (
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
