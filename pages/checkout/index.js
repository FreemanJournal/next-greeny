import React from 'react'
import Checkout from '../../components/Checkout/Checkout'
import FooterPart from '../../components/Footer/FooterPart'
import HeaderPart from '../../components/Header/HeaderPart/HeaderPart'
import HeaderTop from '../../components/Header/HeaderTop/HeaderTop'
import NavbarPart from '../../components/Header/NavbarPart/NavbarPart'
import NavSidebar from '../../components/Header/NavbarPart/NavSidebar'

export default function CheckoutPage() {
    return (
        <>

            <HeaderTop />
            <HeaderPart />
            <NavbarPart />
            <NavSidebar />
            <Checkout />
            <FooterPart />


        </>
    )
}
