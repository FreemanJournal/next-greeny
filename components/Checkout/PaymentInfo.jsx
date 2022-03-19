import React, { useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import CheckoutModal from './CheckoutModal';

export default function PaymentInfo() {
    const [isActive, setIsActive] = useState();
    const [modalShow, setModalShow] = useState(false);

    const activeHandler = (id) => {
        setIsActive(id)
    }
    return (
        <>
            <div className="col-lg-12">
                <div className="account-card mb-0">
                    <div className="account-title">
                        <h4>payment option</h4><button data-bs-toggle="modal" data-bs-target="#payment-add" onClick={() => setModalShow(prev => !prev)}>add
                            card</button>
                    </div>
                    <div className="account-content">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 alert fade show">
                                <div className={`payment-card payment ${isActive === 'payment-1' && 'active'}`} onClick={() => activeHandler('payment-1')}><img src="images/payment/png/01.png"
                                    alt="payment" />
                                    <h4>card number</h4>
                                    <p><span>****</span><span>****</span><span>****</span><sup>1876</sup></p>
                                    <h5>miron mahmud</h5><button className="trash icofont-ui-delete" title="Remove This"
                                        data-bs-dismiss="alert"> <FiTrash /> </button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 alert fade show">
                                <div className={`payment-card payment ${isActive === 'payment-2' && 'active'}`} onClick={() => activeHandler('payment-2')}><img src="images/payment/png/02.png"
                                    alt="payment" />
                                    <h4>card number</h4>
                                    <p><span>****</span><span>****</span><span>****</span><sup>1876</sup></p>
                                    <h5>miron mahmud</h5><button className="trash icofont-ui-delete" title="Remove This"
                                        data-bs-dismiss="alert"> <FiTrash /> </button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 alert fade show">
                                <div className={`payment-card payment ${isActive === 'payment-3' && 'active'}`} onClick={() => activeHandler('payment-3')}><img src="images/payment/png/03.png"
                                    alt="payment" />
                                    <h4>card number</h4>
                                    <p><span>****</span><span>****</span><span>****</span><sup>1876</sup></p>
                                    <h5>miron mahmud</h5><button className="trash icofont-ui-delete" title="Remove This"
                                        data-bs-dismiss="alert"> <FiTrash /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-check">
                        <input type="checkbox" id="checkout-check" />
                        <label htmlFor="checkout-check">By making this purchase you agree to our <a href="#">Terms and Conditions</a>.</label>
                    </div>
                    <div className="checkout-proced"><a href="invoice.html" className="btn btn-inline">proced to checkout</a></div>
                </div>
            </div>
            <div className="modal fade show" id="payment-add">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"><button className="modal-close" data-bs-dismiss="modal"><i
                        className="icofont-close"></i></button>
                        <div className="modal-form">
                            <div className="form-title">
                                <h3>add new payment</h3>
                            </div>
                            <div className="form-group">
                                <label className="form-label">card number</label>
                                <input className="form-control" type="text" placeholder="Enter your card number" />
                            </div>
                            <button className="form-btn" type="button">save card info</button>
                        </div>
                    </div>
                </div>
            </div>

            <CheckoutModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title='card'
                
            />
        </>
    )
}
