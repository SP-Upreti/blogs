import './App.css'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/details'
import Home from './pages/home'
import Auth from './pages/auth'
import Profile from './pages/profile'


function App() {
  return (
    <>
      <Routes>
        <Route path='/details' element={<Details />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
