import React from 'react'
import NavBar from './Components/NavBar'
import Movies from './Components/Movies'
import Series from './Components/Series'
import Footer from './Components/Footer'
import AllMovies from './Components/AllMovies'
import AllSeries from './Components/AllSeries'

const App = () => {
  return (
    <>
      <NavBar />
      <AllMovies />
      <AllSeries />
      <Footer />
    </>
  )
}

export default App
