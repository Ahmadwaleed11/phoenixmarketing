import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import WeDo from '../components/home/WeDo'
import Work from '../components/home/Work'
import Pricing from '../components/home/Pricing'
import Blog from '../components/home/Blog'
import FAQ from '../components/home/FAQ'
import Footer from '../components/common/Footer'
function Home() {
  return (
    <>
    
    <Hero/>
    <WeDo/>
    <Work/>
    <Pricing/>
    <Blog/>
    <FAQ/>
    
    </>
  )
}

export default Home