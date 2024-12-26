import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/navbar/posts/blogs'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
