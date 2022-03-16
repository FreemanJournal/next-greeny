import React, { useState } from 'react'
import { FaEye} from 'react-icons/fa'
import {  FiTrash } from 'react-icons/fi'
import ProductViewModal from './ProductViewModal';


export default function Orders() {
    const [showCoupon, setShowCoupon] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <ProductViewModal showModal={showModal} setShowModal={setShowModal} />
            <div className="col-lg-12">
                <div className="account-card">
                    <div className="account-title">
                        <h4>Your order</h4>
                    </div>
                    <div className="account-content">
                        <div className="table-scroll">
                            <table className="table-list">
                                <thead>
                                    <tr>
                                        <th scope="col">Serial</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">brand</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-serial">
                                            <h6>01</h6>
                                        </td>
                                        <td className="table-image"><img src="images/product/01.jpg" alt="product" /></td>
                                        <td className="table-name">
                                            <h6>product name</h6>
                                        </td>
                                        <td className="table-price">
                                            <h6>$19<small>/kilo</small></h6>
                                        </td>
                                        <td className="table-brand">
                                            <h6>Fresh Company</h6>
                                        </td>
                                        <td className="table-quantity">
                                            <h6>3</h6>
                                        </td>
                                        <td className="table-action">
                                            <a className="view" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view" onClick={() => setShowModal(prev => !prev)} >
                                                <i className="fas fa-eye">
                                                    <FaEye />
                                                </i>
                                            </a>
                                            <a className="trash" href="#" title="Remove Wishlist">
                                                <i className="icofont-trash">
                                                    <FiTrash />
                                                </i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial">
                                            <h6>02</h6>
                                        </td>
                                        <td className="table-image"><img src="images/product/02.jpg" alt="product" /></td>
                                        <td className="table-name">
                                            <h6>product name</h6>
                                        </td>
                                        <td className="table-price">
                                            <h6>$19<small>/kilo</small></h6>
                                        </td>
                                        <td className="table-brand">
                                            <h6>Radhuni Masala</h6>
                                        </td>
                                        <td className="table-quantity">
                                            <h6>5</h6>
                                        </td>
                                        <td className="table-action"><a className="view" title="Quick View"
                                            data-bs-toggle="modal" data-bs-target="#product-view" onClick={() => setShowModal(prev => !prev)}><i
                                                className="fas fa-eye">
                                                <FaEye /></i></a><a className="trash" href="#"
                                                    title="Remove Wishlist"><i className="icofont-trash">
                                                    <FiTrash /></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial">
                                            <h6>03</h6>
                                        </td>
                                        <td className="table-image"><img src="images/product/03.jpg" alt="product" /></td>
                                        <td className="table-name">
                                            <h6>product name</h6>
                                        </td>
                                        <td className="table-price">
                                            <h6>$19<small>/kilo</small></h6>
                                        </td>
                                        <td className="table-brand">
                                            <h6>Pran Prio</h6>
                                        </td>
                                        <td className="table-quantity">
                                            <h6>2</h6>
                                        </td>
                                        <td className="table-action"><a className="view" title="Quick View"
                                            data-bs-toggle="modal" data-bs-target="#product-view" onClick={() => setShowModal(prev => !prev)}><i
                                                className="fas fa-eye">
                                                <FaEye /></i></a><a className="trash" href="#"
                                                    title="Remove Wishlist"><i className="icofont-trash">
                                                    <FiTrash /></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial">
                                            <h6>04</h6>
                                        </td>
                                        <td className="table-image"><img src="images/product/04.jpg" alt="product" /></td>
                                        <td className="table-name">
                                            <h6>product name</h6>
                                        </td>
                                        <td className="table-price">
                                            <h6>$19<small>/kilo</small></h6>
                                        </td>
                                        <td className="table-brand">
                                            <h6>Real Food</h6>
                                        </td>
                                        <td className="table-quantity">
                                            <h6>3</h6>
                                        </td>
                                        <td className="table-action"><a className="view" title="Quick View"
                                            data-bs-toggle="modal" data-bs-target="#product-view" onClick={() => setShowModal(prev => !prev)}><i
                                                className="fas fa-eye">
                                                <FaEye /></i></a><a className="trash" href="#"
                                                    title="Remove Wishlist"><i className="icofont-trash">
                                                    <FiTrash /></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="table-serial">
                                            <h6>05</h6>
                                        </td>
                                        <td className="table-image"><img src="images/product/05.jpg" alt="product" /></td>
                                        <td className="table-name">
                                            <h6>product name</h6>
                                        </td>
                                        <td className="table-price">
                                            <h6>$19<small>/kilo</small></h6>
                                        </td>
                                        <td className="table-brand">
                                            <h6>Rdhuni Company</h6>
                                        </td>
                                        <td className="table-quantity">
                                            <h6>7</h6>
                                        </td>
                                        <td className="table-action"><a className="view" title="Quick View"
                                            data-bs-toggle="modal" data-bs-target="#product-view" onClick={() => setShowModal(prev => !prev)}><i
                                                className="fas fa-eye">
                                                <FaEye /></i></a><a className="trash" href="#"
                                                    title="Remove Wishlist"><i className="icofont-trash">
                                                    <FiTrash /></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="chekout-coupon"><button className="coupon-btn" onClick={() => setShowCoupon(prev => !prev)}>Do you have a coupon code?</button>
                            <div className="coupon-form" style={{ display: `${showCoupon ? 'flex' : 'none'}` }}>
                                <input type="text" placeholder="Enter your coupon code" />
                                <button type="button"><span>apply</span></button>
                            </div>
                        </div>
                        <div className="checkout-charge">
                            <ul>
                                <li><span>Sub total</span><span>$267.45</span></li>
                                <li><span>delivery fee</span><span>$10.00</span></li>
                                <li><span>discount</span><span>$00.00</span></li>
                                <li><span>Total<small>(Incl. VAT)</small></span><span>$277.00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
