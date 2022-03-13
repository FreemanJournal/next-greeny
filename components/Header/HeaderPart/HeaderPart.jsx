import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaHeart, FaRandom, FaTimes } from 'react-icons/fa';
import NavSidebar from '../NavbarPart/NavSidebar';
export default function HeaderPart() {
    const [showSearch, setShowSearch] = useState(false)
    const [showNavSideBar, setShowNavSideBar] = useState(false);



    const mobileSearchHandler = () => {
        setShowSearch(prev => !prev)

    }
    return (
        <header className="header-part">
            <div className="container">
                <div className="header-content">
                    <div className="header-media-group">
                        <button className="header-user position-relative" style={{ height: '3em', width: '3em' }} onClick={()=>setShowNavSideBar(prev=>!prev)}>
                            <Image src="/images/user.png" alt="user" layout='fill' />
                        </button>
                        <a href="index.html">
                            <div className="position-relative" style={{ height: '3em', width: '8em' }}>
                                <Image src="/images/logo.png" alt="logo" layout='fill' />
                            </div>

                        </a>
                        <button className="header-src" onClick={mobileSearchHandler}>
                            <i className="fas fa-search"> {showSearch ? <FaTimes /> : <AiOutlineSearch />}</i>
                        </button>
                    </div>
                    <a href="index.html" className="header-logo">
                        <Image src="/images/logo.png" alt="logo" height='100' width='500' />
                    </a>
                    <a href="login.html" className="header-widget" title="My Account">
                        <Image src="/images/user.png" alt="user" height='100' width='100' /><span>join</span>
                    </a>
                    <form className={`header-form ${showSearch && 'active'}`}>
                        <input type="text" placeholder="Search anything..." />
                        <button><i className="fas fa-search"><AiOutlineSearch className='me-5' /></i></button>
                    </form>
                    <div className="header-widget-group">
                        <a href="compare.html" className="header-widget" title="Compare List">
                            <i className="fas fa-shopping-basket">
                                <FaRandom />
                            </i><sup>0</sup>
                        </a>
                        <a href="wishlist.html" className="header-widget" title="Wishlist">
                            <i className="fas fa-shopping-basket"><FaHeart /></i><sup>0</sup>
                        </a>
                        <button className="header-widget header-cart" title="Cartlist">

                            <i className="fas fa-shopping-basket"><AiOutlineShoppingCart /></i><sup>9+</sup>
                            <span>total price<small>$345.00</small></span>
                        </button>
                    </div>
                </div>
            </div>
            <NavSidebar show={showNavSideBar} setShowNavSideBar={setShowNavSideBar}/>
           
        </header>
    )
}
