import './App.css'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/details'
import Home from './pages/home'


function App() {
  return (
    <>
      <Routes>
        <Route path='/details' element={<Details />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
