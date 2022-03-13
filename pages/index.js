import React from 'react'
import HeaderPart from '../components/Header/HeaderPart/HeaderPart'
import HeaderTop from '../components/Header/HeaderTop/HeaderTop'
import NavbarPart from '../components/Header/NavbarPart/NavbarPart'
import CarouselSection from '../components/CarouselSection/CarouselSection'
import NavSidebar from '../components/Header/NavbarPart/NavSidebar'
export default function Home() {
  return (
    <>
    <HeaderTop/>
    <HeaderPart/>
    <NavbarPart/>
    <NavSidebar/>
    <CarouselSection/>
    
    </>
  )
}
