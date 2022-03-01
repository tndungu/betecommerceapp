import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <div>
          <Announcement />
          <Navbar />
          <Slider/>
          <Products/>
          <Footer/>
      </div>
  )
}

export default Home  