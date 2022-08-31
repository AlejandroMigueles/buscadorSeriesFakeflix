import DefaultImage from '../img/noImage.png'

const ItemMovie = ({ title, id, poster, summary, type }) => {
  const image = poster === undefined ? DefaultImage : poster

  return (
    <article>
      <div className='item-movie' style={{ backgroundImage: `url(${image})` }}>
        <h4 className='contentNameMovie'>{title}</h4>
        {/* {summary} */}
      </div>
    </article>
  )
}

export default ItemMovie
