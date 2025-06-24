import React from 'react'
import Trailer from './Trailer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieInfo from './MovieInfo'

const Detail = () => {
  return (
    <div>
        <Navbar />
      <Trailer />
      <MovieInfo />
      <Footer />
    </div>
  )
}

export default Detail