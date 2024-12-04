import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Carousel/></div>
        <div className='m-3'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          </div>
        <div><Footer/></div>
    </div>
  )
}
