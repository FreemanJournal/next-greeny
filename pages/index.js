import React from 'react'
import Articles from '../components/Articles/Articles'
import CarouselSection from '../components/CarouselSection/CarouselSection'
import CountDown from '../components/CountDown/CountDown'
import FeatureProducts from '../components/FeaturedProducts/FeatureProducts'
import Feedback from '../components/Feedback/Feedback'
import FooterPart from '../components/Footer/FooterPart'
import HeaderSection from '../components/Header/HeaderSection'
import Promotion from '../components/Promotion/Promotion'
import RecentlySoldProducts from '../components/RecentProducts/RecentlySoldProducts'
export default function Home() {

  return (
    <>
      <HeaderSection />
      <CarouselSection />
      <RecentlySoldProducts />
      <Promotion />
      <FeatureProducts />
      <CountDown />
      <Feedback />
      <Articles />
      <FooterPart />


    </>
  )
}
