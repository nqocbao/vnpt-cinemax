import React from 'react'
import Slider from './Slider'
import Navbar from '../components/Navbar'
import MovieList from './MovieList'
import Blog from './Blog'
import EventList from './EventList'
import Advertise from './Advertise'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Slider />
      <MovieList />
      <Blog />
      <EventList />
      <Advertise />
    </div>
  )
}

export default Home
