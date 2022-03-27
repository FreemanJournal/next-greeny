import React from 'react';
import ContactNumber from './ContactNumber';
import DeliveryAddress from './DeliveryAddress';
import DeliverySchedule from './DeliverySchedule';
import MultiStepForm from './MultiStepForm/MultiStepForm';
import Orders from './Orders';
import PaymentInfo from './PaymentInfo';

export default function Checkout() {
 
    return (
        <>
            {/* <section className="inner-section single-banner" style={{ background: 'url(images/single-banner.jpg) no-repeat center' }}>
                <div className="container">
                    <h2>checkout</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="shop-4column.html">shop grid</a></li>
                        <li className="breadcrumb-item active" aria-current="page">checkout</li>
                    </ol>
                </div>
            </section> */}
            <section className="inner-section checkout-part">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12">
                            <div className="alert-info">
                                <p>Returning customer? <a href="login.html">Click here to login</a></p>
                            </div>
                        </div> */}
                        {/* <Orders /> */}
                        <MultiStepForm/>
                       
                    </div>
                </div>
            </section>

        </>
    )
}
