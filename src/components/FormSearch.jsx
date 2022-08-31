import { React, useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'

const FormSearch = () => {
  const [title, setTitle] = useState('')
  const { setQuery } = useContext(DataContext)
  // const { setQuery, error} = useContext(DataContext)
  // const { data } = useFetch('superman')

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(title)
    // console.log('titulo', title)
  }
  return (
    <div className='form-search'>
      <h2>Buscador de series y películas</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Titulo de la pelicula o serie' onChange={e => setTitle(e.target.value)} />
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default FormSearch
