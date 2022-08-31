import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import ItemEpisode from './ItemEpisode'

const Episodes = () => {
  const { data } = useContext(DataContext)
  return (
    <div className='movies-content'>
      <ItemEpisode
        key={data?.show.id}
        id={data?.show.id}
        type={data?.show.type}
        title={data?.show.name}
        poster={data?.show?.image?.original}
        summary={data?.show?.summary}
      />
    </div>
  )
}

export default Episodes
