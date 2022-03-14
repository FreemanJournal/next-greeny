import React from 'react'
import HeaderPart from '../components/Header/HeaderPart/HeaderPart'
import HeaderTop from '../components/Header/HeaderTop/HeaderTop'
import NavbarPart from '../components/Header/NavbarPart/NavbarPart'
import CarouselSection from '../components/CarouselSection/CarouselSection'
import NavSidebar from '../components/Header/NavbarPart/NavSidebar'
import RecentlySoldProducts from '../components/RecentProducts/RecentlySoldProducts'
import Promotion from '../components/Promotion/Promotion'
import FeatureProducts from '../components/FeaturedProducts/FeatureProducts'
import CountDown from '../components/CountDown/CountDown'
import Feedback from '../components/Feedback/Feedback'
import Articles from '../components/Articles/Articles'
import FooterPart from '../components/Footer/FooterPart'
export default function Home() {
  return (
    <>
    <HeaderTop/>
    <HeaderPart/>
    <NavbarPart/>
    <NavSidebar/>
    <CarouselSection/>
    <RecentlySoldProducts/>
    <Promotion/>
    <FeatureProducts/>
    <CountDown/>
    <Feedback/>
    <Articles/>
    <FooterPart/>

    
    </>
  )
}
