import Image from 'next/image';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import PaginationComponent from './Pagination';
import ProductViewModal from './ProductViewModal';

const database = [
    { serial: '01', img: '/images/product/01.jpg', name: "Tomato", price: "19", brand: "Fresh Company", quantity: 4 },
    { serial: '02', img: '/images/product/02.jpg', name: "Gazar", price: "19", brand: "Radhuni Masala", quantity: 4 },
    { serial: '03', img: '/images/product/03.jpg', name: "Shosha", price: "19", brand: "Fresh Company", quantity: 4 },
    { serial: '04', img: '/images/product/04.jpg', name: "Eggplant", price: "19", brand: "Radhuni Masala", quantity: 4 },
    { serial: '05', img: '/images/product/05.jpg', name: "Ladyfinger", price: "19", brand: "Pran Prio", quantity: 4 },
    { serial: '06', img: '/images/product/01.jpg', name: "Tomato", price: "19", brand: "Fresh Company", quantity: 4 },
    { serial: '07', img: '/images/product/02.jpg', name: "Gazar", price: "19", brand: "Radhuni Masala", quantity: 4 },
    { serial: '08', img: '/images/product/03.jpg', name: "Shosha", price: "19", brand: "Fresh Company", quantity: 4 },
    { serial: '09', img: '/images/product/04.jpg', name: "Eggplant", price: "19", brand: "Radhuni Masala", quantity: 4 },
    { serial: '10', img: '/images/product/05.jpg', name: "Ladyfinger", price: "19", brand: "Pran Prio", quantity: 4 },
    { serial: '11', img: '/images/product/05.jpg', name: "Ladyfinger", price: "19", brand: "Pran Prio", quantity: 4 },
    { serial: '12', img: '/images/product/05.jpg', name: "Ladyfinger", price: "19", brand: "Pran Prio", quantity: 4 },
]

export default function Orders() {
    const [showCoupon, setShowCoupon] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);
    const [modalShow, setModalShow] = useState(false);

    const lastProductNumber = currentPage * productsPerPage;
    const firstProductIndex = lastProductNumber - productsPerPage;
    const limitedProducts = database.slice(
        firstProductIndex,
        lastProductNumber
    );


    return (
        <>
            <ProductViewModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
             />
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
                                    {
                                        limitedProducts.map((item, index) => {
                                            const { serial, img, name, price, brand, quantity } = item
                                            return (
                                                <tr key={index}>
                                                    <td className="table-serial">
                                                        <h6>{serial}</h6>
                                                    </td>
                                                    <td className="table-image position-relative">
                                                        <Image src={img} alt="product" layout='fill' className='p-3' />
                                                    </td>
                                                    <td className="table-name">
                                                        <h6>{name}</h6>
                                                    </td>
                                                    <td className="table-price">
                                                        <h6>${price}<small>/kilo</small></h6>
                                                    </td>
                                                    <td className="table-brand">
                                                        <h6>{brand}</h6>
                                                    </td>
                                                    <td className="table-quantity">
                                                        <h6>{quantity}</h6>
                                                    </td>
                                                    <td className="table-action">
                                                        <a className="view" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view" onClick={() => setModalShow(prev => !prev)} >
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

                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bottom-paginate">
                                    <p className="page-info">Showing {lastProductNumber} of {database.length} Results</p>
                                    <ul className="pagination">
                                        <PaginationComponent
                                            itemsCount={database.length}
                                            itemsPerPage={productsPerPage}
                                            currentPage={currentPage}
                                            setCurrentPage={setCurrentPage}
                                            alwaysShown={false}
                                        />

                                    </ul>
                                </div>
                            </div>
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
