import React from 'react'
import NavbarPart from '../NavbarPart/NavbarPart'
import NavSidebar from '../NavbarPart/NavSidebar'
import HeaderPart from './HeaderPart/HeaderPart'
import HeaderTop from './HeaderTop/HeaderTop'
import styles from './Header.module.css'
export default function HeaderSection() {
    return (
        <div className={styles.headerSection}>
            {/* <HeaderTop /> */}
            <HeaderPart />
            {/* <NavbarPart /> */}
            <NavSidebar />
        </div>
    )
}
