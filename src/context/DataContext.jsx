
import { useState, createContext } from 'react'
import { useFetch } from '../hooks/useFetch'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  // al cambiar este useState, es lo que renderiza al cargar la página la primera vez
  const [query, setQuery] = useState('')
  const { isLoading, error, data } = useFetch(`search/shows?q=${query}`)
  return (
    <DataContext.Provider value={{ isLoading, error, data, setQuery }}>
      {children}
    </DataContext.Provider>
  )
}
