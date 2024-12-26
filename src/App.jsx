import './App.css'
import { Route, Routes } from 'react-router-dom'
import Details from './components/pages/details'
import Home from './components/pages/home'

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
