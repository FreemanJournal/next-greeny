import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../../context/AppContext';
import CartItem from '../../../../Cart/CartItem';
import WizardLayout from '../../WizardLayout';




export default function OrderSummary(props) {
    const {grandTotal, setGrandTotal} = props
    const { state, dispatch,total} = useAppContext();
    const [data, setData] = useState([]);
    const [showCoupon, setShowCoupon] = useState(false);
    const DELIVERY_FEE = total && 100 || 0
    let DISCOUNT_RATE = .1

    const [promoCode, setPromoCode] = useState();
    const [discount, setDiscount] = useState(0);

    setGrandTotal((total + DELIVERY_FEE - discount))
  

    useEffect(()=>setData(state),[state])

  

    const deleteHandler = (serial) => {
        dispatch({ type: 'delete_product', value: serial })
        setData([...state])

    }


    const onClickHandler = () => {
        if (promoCode === 'promo') {
            setDiscount((total + DELIVERY_FEE) * DISCOUNT_RATE)
            return
        }
        setDiscount(0)
    }

    
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
                                        <div className="cart-total"><i className="fas fa-shopping-basket"></i><span>total item ({data?.length})</span></div>
                                    </div>
                                    <ul className="cart-list">
                                        {
                                            data?.map((item, index) => {

                                                return (<CartItem item={item} key={index}  deleteHandler={deleteHandler} />)
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
                                    <li><span>Sub total</span><span>${total}</span></li>
                                    <li><span>delivery fee</span><span>${DELIVERY_FEE}.00</span></li>
                                    <li><span>discount</span><span>${discount}</span></li>
                                    <li><span>Total<small>(Incl. VAT)</small></span><span>${grandTotal}</span></li>
                                </ul>
                                <div className="position-absolute bottom-0 end-0 start-0" role='button' onClick={() => props.wizard.nextStep()}>
                                    <a className="cart-checkout-btn">
                                        <span className="checkout-label">Confirm Order</span>
                                        <span className="checkout-price">${grandTotal}</span>
                                    </a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </WizardLayout>

    )
}
