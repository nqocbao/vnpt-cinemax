import React from 'react'
import Slider from './Slider'
import Navbar from '../components/Navbar'
import MovieList from './MovieList'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Slider />
      <MovieList />
    </div>
  )
}

export default Home
