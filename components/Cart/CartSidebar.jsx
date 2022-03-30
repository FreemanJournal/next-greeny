import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
import CartItem from './CartItem';


// let total = 0
function CartSidebar({ show, setShowCartSideBar }) {
    const [showCoupon, setShowCoupon] = useState(false);
    const { state, dispatch, total, disDiv } = useAppContext();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([...state])

    }, [state])



    const deleteHandler = (serial) => {
        dispatch({ type: 'delete_product', value: serial })
        setData([...state])

    }

    return (
        <>
            <aside className={`cart-sidebar ${show && 'active'}`}>
                <div className="cart-header">
                    <div className="cart-total"><span>total item ({state.length})</span></div>
                    <button className="cart-close" onClick={() => setShowCartSideBar(prev => !prev)}><i className="icofont-close">
                        <FaTimes />
                    </i></button>
                </div>
                <ul className="cart-list">
                    {

                        data?.map((item, index) => <CartItem key={index} item={item} deleteHandler={deleteHandler} />)
                    }

                </ul>
                <div className="cart-footer py-3" style={total === 0 ? disDiv : {}}>

                    <Link href="/checkout" className="">
                        <a className="cart-checkout-btn mb-2">
                            <span className="checkout-label">Proceed to Checkout</span>
                            <span className="checkout-price">${total}</span>
                        </a>

                    </Link>
                    <div role="button" onClick={() => dispatch({type:'clear_cart', value: total})}>
                        <a className="cart-checkout-btn" style={total === 0 ? { pointerEvents: "none", opacity: ".5", background: "red" } : { background: "red" }}>
                            <span className="checkout-label">Clear All Items</span>
                            <span className="checkout-price">${total}</span>
                        </a>

                    </div>

                </div>



            </aside>
        </>
    )
}
export default CartSidebar;
// export default React.memo(CartSidebar);