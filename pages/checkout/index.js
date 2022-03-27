import React from 'react'
import Checkout from '../../components/Checkout/Checkout'
import FooterPart from '../../components/Footer/FooterPart'
import HeaderPart from '../../components/Header/HeaderPart/HeaderPart'
import HeaderSection from '../../components/Header/HeaderSection'
import HeaderTop from '../../components/Header/HeaderTop/HeaderTop'
import NavbarPart from '../../components/NavbarPart/NavbarPart'
import NavSidebar from '../../components/NavbarPart/NavSidebar'


export default function CheckoutPage() {
    return (
        <>

           <HeaderSection/>
            <Checkout />
            <FooterPart />


        </>
    )
}
