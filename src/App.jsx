
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './Layout/MainLayout'
import MoviesPage from './pages/MoviesPage'
import SeriesPage from './pages/SeriesPage'
import AddMovies_Series from './Components/AddMovies_Series'


const App = () => {

const router = createBrowserRouter(
  

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage title="LATEST MOVIES"/>} />
      <Route path='/series' element={<SeriesPage />} />
      <Route path='/AddMS' element={<AddMovies_Series/>} />
    </Route>
  )
)

  return <RouterProvider router={router} />
}

export default App
