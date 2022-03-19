import React, { useEffect, useState } from 'react';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image'
import WizardLayout from '../../WizardLayout';
import CartItem from './CartItem';

const DELIVERY_FEE = 100
let DISCOUNT_RATE = .1
const database = [
    { serial: '01', img: '/images/product/01.jpg', name: "Tomato", price: "10", brand: "Fresh Company", quantity: 4 },
    { serial: '02', img: '/images/product/02.jpg', name: "Gazar", price: "10", brand: "Radhuni Masala", quantity: 4 },
    { serial: '03', img: '/images/product/03.jpg', name: "Shosha", price: "30", brand: "Fresh Company", quantity: 4 },
    { serial: '04', img: '/images/product/04.jpg', name: "Eggplant", price: "10", brand: "Radhuni Masala", quantity: 4 },
    { serial: '05', img: '/images/product/05.jpg', name: "Ladyfinger", price: "10", brand: "Pran Prio", quantity: 4 },
    { serial: '06', img: '/images/product/01.jpg', name: "Tomato", price: "10", brand: "Fresh Company", quantity: 4 },
    { serial: '07', img: '/images/product/02.jpg', name: "Gazar", price: "30", brand: "Radhuni Masala", quantity: 4 },
    { serial: '08', img: '/images/product/03.jpg', name: "Shosha", price: "10", brand: "Fresh Company", quantity: 4 },
    { serial: '09', img: '/images/product/04.jpg', name: "Eggplant", price: "10", brand: "Radhuni Masala", quantity: 4 },
    { serial: '10', img: '/images/product/05.jpg', name: "Ladyfinger", price: "20", brand: "Pran Prio", quantity: 4 },
    { serial: '11', img: '/images/product/05.jpg', name: "Ladyfinger", price: "30", brand: "Pran Prio", quantity: 4 },
    { serial: '12', img: '/images/product/05.jpg', name: "Ladyfinger", price: "10", brand: "Pran Prio", quantity: 4 },
]
export default function OrderSummary(props) {
    const [showCoupon, setShowCoupon] = useState(false);
    const [subTotal, setSubTotal] = useState(0)
    const [allTotal, setAllTotal] = useState({});
    const [promoCode, setPromoCode] = useState();
    const [discount, setDiscount] = useState(0);

    const onClickHandler = () => {
        if (promoCode === 'promo') {
            setDiscount((subTotal + DELIVERY_FEE) * DISCOUNT_RATE)
            return
        }
        setDiscount(0)
    }

    let total = (subTotal + DELIVERY_FEE - discount)

    useEffect(() => {
        let totalSum = Object.values(allTotal).reduce((sum, item) => sum += item, 0)
        setSubTotal(totalSum)
        setDiscount(0)

    }, [allTotal])
    return (
        <WizardLayout {...props}>
            <div className="col-lg-12">
                <div className="account-card">
                    <div className="account-title">
                        <h4>Your order</h4>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="w-50">
                            <div className="col-md-12 col-lg-12">
                                <div className="">
                                    <div className="cart-header">
                                        <div className="cart-total"><i className="fas fa-shopping-basket"></i><span>total item ({database.length})</span></div>
                                    </div>
                                    <ul className="cart-list">
                                        {
                                            database.map((item, index) => {

                                                return (<CartItem item={item} key={index} index={index} allTotal={allTotal} setAllTotal={setAllTotal} />)
                                            })
                                        }

                                    </ul>
                                    <div className="cart-footer">
                                        <button className="coupon-btn" onClick={() => setShowCoupon(prev => !prev)}>Do you have a coupon code?</button>
                                        <p className="coupon-btn text-muted text-decoration-none ">Use `promo` for 10% discount </p>
                                        <div className="coupon-form" style={{ display: `${showCoupon ? 'flex' : 'none'}` }}>
                                            <input onChange={(e) => setPromoCode(e.target.value)} type="text" placeholder="Enter your coupon code" />
                                            <button type="button" onClick={onClickHandler}><span>apply</span></button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-50 position-relative">
                            <div className="cart-header">
                                <div className="cart-total"><i className="fas fa-shopping-basket"></i><span>Total purchase</span></div>
                            </div>
                            <div className="checkout-charge">
                                <ul>
                                    <li><span>Sub total</span><span>${subTotal}</span></li>
                                    <li><span>delivery fee</span><span>${DELIVERY_FEE}.00</span></li>
                                    <li><span>discount</span><span>${discount}</span></li>
                                    <li><span>Total<small>(Incl. VAT)</small></span><span>${total}</span></li>
                                </ul>
                                <div className="position-absolute bottom-0 end-0 start-0" onClick={() => props.wizard.nextStep()}>
                                    <a className="cart-checkout-btn">
                                        <span className="checkout-label">Proceed to Payment</span>
                                        <span className="checkout-price">${total}</span>
                                    </a>
                                </div>
                                {/* <button className="form-btn" type="button">Complete the purchase</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </WizardLayout>

    )
}
