import React, { useState } from 'react';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
export default function Cart({ show, setShowCartSideBar }) {
    const [showCoupon, setShowCoupon] = useState(false);
    const onChangeHandler = () =>{

    }
    return (
        <>
        <aside className={`cart-sidebar ${show && 'active'}`}>
            <div className="cart-header">
                <div className="cart-total"><i className="fas fa-shopping-basket"></i><span>total item (5)</span></div>
                <button className="cart-close" onClick={() => setShowCartSideBar(prev => !prev)}><i className="icofont-close">
                    <FaTimes />
                </i></button>
            </div>
            <ul className="cart-list">
                <li className="cart-item">
                    <div className="cart-media"><a href="#"><img src="images/product/01.jpg" alt="product" /></a><button
                        className="cart-delete"><i className="far fa-trash-alt"> <FaTrashAlt /></i></button></div>
                    <div className="cart-info-group">
                        <div className="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div className="cart-action-group">
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                className="icofont-minus"> <FaMinus /></i></button><input onChange={onChangeHandler} className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1" /><button
                                        className="action-plus" title="Quantity Plus"><i className="icofont-plus"> <FaPlus /></i></button></div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-media"><a href="#"><img src="images/product/02.jpg" alt="product" /></a><button
                        className="cart-delete"><i className="far fa-trash-alt"> <FaTrashAlt /></i></button></div>
                    <div className="cart-info-group">
                        <div className="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div className="cart-action-group">
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                className="icofont-minus"> <FaMinus /></i></button><input onChange={onChangeHandler} className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1" /><button
                                        className="action-plus" title="Quantity Plus"><i className="icofont-plus"> <FaPlus /></i></button></div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-media"><a href="#"><img src="images/product/03.jpg" alt="product" /></a><button
                        className="cart-delete"><i className="far fa-trash-alt"> <FaTrashAlt /></i></button></div>
                    <div className="cart-info-group">
                        <div className="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div className="cart-action-group">
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                className="icofont-minus"> <FaMinus /></i></button><input onChange={onChangeHandler} className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1" /><button
                                        className="action-plus" title="Quantity Plus"><i className="icofont-plus"> <FaPlus /></i></button></div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-media"><a href="#"><img src="images/product/04.jpg" alt="product" /></a><button
                        className="cart-delete"><i className="far fa-trash-alt"> <FaTrashAlt /></i></button></div>
                    <div className="cart-info-group">
                        <div className="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div className="cart-action-group">
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                className="icofont-minus"> <FaMinus /></i></button><input onChange={onChangeHandler} className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1" /><button
                                        className="action-plus" title="Quantity Plus"><i className="icofont-plus"> <FaPlus /></i></button></div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-media"><a href="#"><img src="images/product/05.jpg" alt="product" /></a><button
                        className="cart-delete"><i className="far fa-trash-alt"> <FaTrashAlt /></i></button></div>
                    <div className="cart-info-group">
                        <div className="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div className="cart-action-group">
                            <div className="product-action"><button className="action-minus" title="Quantity Minus"><i
                                className="icofont-minus"> <FaMinus /></i></button><input onChange={onChangeHandler} className="action-input"
                                    title="Quantity Number" type="text" name="quantity" value="1" /><button
                                        className="action-plus" title="Quantity Plus"><i className="icofont-plus"> <FaPlus /></i></button></div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="cart-footer">
                <button className="coupon-btn" onClick={()=>setShowCoupon(prev => !prev)}>Do you have a coupon code?</button>
                <div className="coupon-form" style={{display:`${showCoupon?'flex':'none'}`}}>
                    <input onChange={onChangeHandler} type="text" placeholder="Enter your coupon code" />
                    <button type="submit"><span>apply</span></button>
                </div>
                <a className="cart-checkout-btn" href="checkout.html">
                    <span className="checkout-label">Proceed to Checkout</span>
                    <span className="checkout-price">$369.78</span>
                </a>
            </div>
        </aside>
        </>
    )
}
