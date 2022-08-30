import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import ItemMovie from './ItemMovie'

const MovieCards = () => {
  const { isLoading, data } = useContext(DataContext)

  return (
    <div className='movies-content'>
      {
                !isLoading
                  ? data.map(item => (
                    <ItemMovie
                      key={item.show.id}
                      id={item.id}
                      type={item.type}
                      title={item.name}
                      poster={item.image}
                    />
                  ))
                  : ''
            }
    </div>
  )
}

export default MovieCards
