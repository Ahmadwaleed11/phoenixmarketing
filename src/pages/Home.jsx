import React from 'react'
import Hero from '../components/home/Hero'
import WeDo from '../components/home/WeDo'
import Work from '../components/home/Work'
import Pricing from '../components/home/Pricing'
import Blog from '../components/home/Blog'
import FAQ from '../components/home/FAQ'
import PageTransition from '../components/common/PageTransition'

function Home() {
  return (
    <PageTransition>
      <Hero/>
      <WeDo/>
      <Work/>
      <Pricing/>
      <Blog/>
      <FAQ/>
    </PageTransition>
  )
}

export default Home