import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SingleSerie from './components/SingleSerie'
import MainPage from './components/MainPage'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/series/:id' element={<SingleSerie />} />
        </Routes>
      </BrowserRouter>
      <h2>main component</h2>
    </div>
  )
}

export default App
