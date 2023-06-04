import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
