import React from 'react'
import Slider from './Slider'
import Navbar from '../components/Navbar'
import MovieList from './MovieList'
import Blog from './Blog'
import EventList from './EventList'
import Advertise from './Advertise'
import About from './About'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Slider />
      <MovieList />
      <Blog />
      <EventList />
      <Advertise />
      <About />
    </div>
  )
}

export default Home
