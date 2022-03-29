import React from 'react';
import MultiStepForm from './MultiStepForm/MultiStepForm';


// const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
export default function Checkout() {


    return (
        <>
            
            <section className="inner-section checkout-part">
                <div className="container">
                    <div className="row">
                       
                        <MultiStepForm/>
                       
                    </div>
                </div>
            </section>

        </>
    )
}
