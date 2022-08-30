const ItemMovie = ({ title, id, poster, summary, type }) => {
  return (
    <article>
      <div className='item-movie' style={{ backgroundImage: `url(${poster})` }}>
        <h4 className='contentNameMovie'>{title}</h4>
        {/* {summary} */}
      </div>
    </article>
  )
}

export default ItemMovie
