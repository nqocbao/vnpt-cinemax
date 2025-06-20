import React from 'react'
import Slider from './Slider'
import Navbar from '../components/Navbar'
import MovieList from './MovieList'
import Blog from './Blog'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Slider />
      <MovieList />
      <Blog />
    </div>
  )
}

export default Home
