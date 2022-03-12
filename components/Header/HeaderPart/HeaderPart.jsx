import Image from 'next/image'
import React from 'react'
import { FaRandom, FaHeart,FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch,AiOutlineShoppingCart } from 'react-icons/ai';
export default function HeaderPart() {
    return (
        <header className="header-part">
            <div className="container">
                <div className="header-content">
                    <div className="header-media-group">
                        <button className="header-user">
                            <Image src="/images/user.png" alt="user" height='100' width='100' />
                        </button>
                        <a href="index.html"><Image src="/images/logo.png" alt="logo" height='100' width='100' /></a>
                        <button className="header-src">
                        <i className="fas fa-search"> <AiOutlineSearch /></i>
                        </button>
                    </div>
                    <a href="index.html" className="header-logo">
                        <Image src="/images/logo.png" alt="logo" height='100' width='500' />
                    </a>
                    <a href="login.html" className="header-widget" title="My Account">
                        <Image src="/images/user.png" alt="user" height='100' width='100' /><span>join</span>
                    </a>
                    <form className="header-form">
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
        </header>
    )
}
