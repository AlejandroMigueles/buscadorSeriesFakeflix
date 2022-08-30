import { React, useState } from 'react'

const FormSearch = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('titulo', title)
  }
  return (
    <div className='form-search'>
      <h2>Buscador de series y películas</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Titulo de la pelicula' onChange={e => setTitle(e.target.value)} />
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default FormSearch
