import React from 'react'
import MovieHeading from './Components/MovieHeading'
import MovieList from './Components/MovieList'
import Addfavourites from './Components/Addfavourites'
import { useContext } from 'react'
import { Context } from './Components/Context'
import RemoveFav from './Components/RemoveFav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  const { favourites, movies, addfavouriteMovie, removefavouriteMovie } = useContext(Context)

  return (
    <BrowserRouter>
      <div className='bg-gray-600 h-full'>
        <MovieHeading />
        <Routes>
          <Route path='/' index element={<MovieList favComp={<Addfavourites />} movies={movies} handleClickAdd={addfavouriteMovie} />}/>
          <Route path='/favourites' element={<MovieList favComp={<RemoveFav />} movies={favourites} handleClickAdd={removefavouriteMovie} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App