
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './Layout/MainLayout'
import MoviesPage from './pages/MoviesPage'
import SeriesPage from './pages/SeriesPage'
import AddMovies_Series from './Components/AddMovies_Series'
import ViewMovies from './Components/ViewMovies'
import ViewSeries, {load} from './Components/ViewSeries'
import Edit from './Components/Edit'


const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage/>} />
      <Route path='/series' element={<SeriesPage />} />
      <Route path='/AddMS' element={<AddMovies_Series/>} />
      <Route path='/ViewMovies/:id' element={<ViewMovies/>} loader={load} /> 
      <Route path='/ViewSeries/:id' element={<ViewSeries/>} loader ={load} />
      <Route path='/Edit/:id' element={<Edit/>} loader={load}/>
    </Route>
  )
)

  return <RouterProvider router={router} />
}

export default App
