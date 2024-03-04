import React from 'react'
import Offer from '../Components/Offer/Offer';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
      </div>
  )
}

export default Shop;