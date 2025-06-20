import React from 'react'
import Slider from './Slider'
import Navbar from '../components/Navbar'
import MovieList from './MovieList'
import Blog from './Blog'
import EventList from './EventList'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Slider />
      <MovieList />
      <Blog />
      <EventList />
    </div>
  )
}

export default Home
