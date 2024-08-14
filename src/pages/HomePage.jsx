import React from 'react'
import Movies from '../Components/Movies'
import Series from '../Components/Series'
import NavBar from '../Components/NavBar'

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <Movies />
      <Series />
    </>
  )
}

export default HomePage