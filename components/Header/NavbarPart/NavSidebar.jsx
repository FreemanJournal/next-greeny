import React, { useState } from 'react'
import Image from 'next/image'
import { FaRandom, FaAngleRight, FaTimes } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';
const prevSubmenu = []
export default function NavSidebar({ show,setShowNavSideBar }) {
    const [showSubmenu, setShowSubmenu] = useState(false)
    
    const dropDownHandler = (event) =>{
        const subMenu = event.target.parentNode.lastChild;
        // prevSubmenu.push(subMenu);
        // console.log(prevSubmenu);
        setShowSubmenu(prev => !prev)
        if(showSubmenu){
             subMenu.style.display = 'block'
            //  prevSubmenu.length = 0
        }else{
            subMenu.style.display = 'none'
        }
    }
    
    return (
        <aside className={`nav-sidebar ${show && 'active'}`}>
            <div className="nav-header">
                <a href="#">
                    <div className="position-relative" style={{ height: '3em', width: '8em' }}>
                        <Image src="/images/logo.png" alt="logo" layout='fill' />
                    </div>
                </a>
                <button className="nav-close" onClick={()=>setShowNavSideBar(prev=>!prev)}>
                    <i className="icofont-close">
                        <FaTimes />
                        
                    </i></button></div>
            <div className="nav-content">
                <div className="nav-btn"><a href="login.html" className="btn btn-inline"><i className="fa fa-unlock-alt"></i><span>join
                    here</span></a></div>
                <div className="nav-select-group">
                    <div className="nav-select"><i className="icofont-world"></i>
                        <select className="select" defaultValue='english'>
                            <option value="english" >English</option>
                            <option value="bangali">Bangali</option>
                            <option value="arabic">Arabic</option>
                        </select></div>
                    <div className="nav-select"><i className="icofont-money"></i>
                        <select className="select" defaultValue='english'>
                            <option value="english">Doller</option>
                            <option value="bangali">Pound</option>
                            <option value="arabic">Taka</option>
                        </select>
                    </div>
                </div>
                <ul className="nav-list">
                    <li>
                        <a className="nav-link dropdown-link" onClick={dropDownHandler}><i className="icofont-home"></i>Home <FaAngleRight className='float-end mt-2'/> </a>
                        <ul className="dropdown-list">
                            <li><a href="home-grid.html"><AiOutlineLine /> Home grid</a></li>
                            <li><a href="index.html"><AiOutlineLine />  Home index</a></li>
                            <li><a href="home-classic.html"><AiOutlineLine />  Home classic</a></li>
                            <li><a href="home-standard.html"><AiOutlineLine />  Home standard</a></li>
                            <li><a href="home-category.html"><AiOutlineLine />  Home category</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link dropdown-link" href="#" onClick={dropDownHandler}><i className="icofont-food-cart"></i>shop <FaAngleRight className='float-end mt-2'/></a>
                        <ul className="dropdown-list">
                            <li><a href="shop-5column.html"><AiOutlineLine />  shop 5 column</a></li>
                            <li><a href="shop-4column.html"><AiOutlineLine />  shop 4 column</a></li>
                            <li><a href="shop-3column.html"><AiOutlineLine />  shop 3 column</a></li>
                            <li><a href="shop-2column.html"><AiOutlineLine />  shop 2 column</a></li>
                            <li><a href="shop-1column.html"><AiOutlineLine />  shop 1 column</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link dropdown-link" href="#" onClick={dropDownHandler}><i className="icofont-page"></i>product <FaAngleRight className='float-end mt-2'/></a>
                        <ul className="dropdown-list">
                            <li><a href="product-tab.html"><AiOutlineLine />  product tab</a></li>
                            <li><a href="product-grid.html"><AiOutlineLine />  product grid</a></li>
                            <li><a href="product-video.html"><AiOutlineLine />  product video</a></li>
                            <li><a href="product-simple.html"><AiOutlineLine />  product simple</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link dropdown-link" href="#" onClick={dropDownHandler}><i className="icofont-bag-alt"></i>my account <FaAngleRight className='float-end mt-2'/></a>
                        <ul className="dropdown-list">
                            <li><a href="profile.html"><AiOutlineLine />  profile</a></li>
                            <li><a href="wallet.html"><AiOutlineLine />  wallet</a></li>
                            <li><a href="wishlist.html"><AiOutlineLine />  wishlist</a></li>
                            <li><a href="compare.html"><AiOutlineLine />  compare</a></li>
                            <li><a href="checkout.html"><AiOutlineLine />  checkout</a></li>
                            <li><a href="orderlist.html"><AiOutlineLine />  order history</a></li>
                            <li><a href="invoice.html"><AiOutlineLine />  order invoice</a></li>
                            <li><a href="email-template.html"><AiOutlineLine />  email template</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link dropdown-link" href="#" onClick={dropDownHandler}><i className="icofont-lock"></i>authentication <FaAngleRight className='float-end mt-2'/></a>
                        <ul className="dropdown-list">
                            <li><a href="login.html"><AiOutlineLine />  login</a></li>
                            <li><a href="register.html"><AiOutlineLine />  register</a></li>
                            <li><a href="reset-password.html"><AiOutlineLine />  reset password</a></li>
                            <li><a href="change-password.html"><AiOutlineLine />  change password</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link dropdown-link" href="#" onClick={dropDownHandler}><i className="icofont-book-alt"></i>blogs <FaAngleRight className='float-end mt-2'/></a>
                        <ul className="dropdown-list">
                            <li><a href="blog-grid.html"><AiOutlineLine />  blog grid</a></li>
                            <li><a href="blog-standard.html"><AiOutlineLine />  blog standard</a></li>
                            <li><a href="blog-details.html"><AiOutlineLine />  blog details</a></li>
                            <li><a href="blog-author.html"><AiOutlineLine />  blog author</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link" href="offer.html"><i className="icofont-sale-discount"></i>offers</a></li>
                    <li><a className="nav-link" href="about.html"><i className="icofont-info-circle"></i>about us</a></li>
                    <li><a className="nav-link" href="faq.html"><i className="icofont-support-faq"></i>need help</a></li>
                    <li><a className="nav-link" href="contact.html"><i className="icofont-contacts"></i>contact us</a></li>
                    <li><a className="nav-link" href="privacy.html"><i className="icofont-warning"></i>privacy policy</a></li>
                    <li><a className="nav-link" href="coming-soon.html"><i className="icofont-options"></i>coming soon</a></li>
                    <li><a className="nav-link" href="error.html"><i className="icofont-ui-block"></i>404 error</a></li>
                    <li><a className="nav-link" href="login.html"><i className="icofont-logout"></i>logout</a></li>
                </ul>
                <div className="nav-info-group">
                    <div className="nav-info"><i className="icofont-ui-touch-phone"></i>
                        <p><small>call us</small><span>(+880) 183 8288 389</span></p>
                    </div>
                    <div className="nav-info"><i className="icofont-ui-email"></i>
                        <p><small>email us</small><span>support@example.com</span></p>
                    </div>
                </div>
                <div className="nav-footer">
                    <p>All Rights Reserved by <a href="#">Mironcoder</a></p>
                </div>
            </div>
        </aside>
    )
}
