import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useAppContext } from '../../../../../context/AppContext';
import getStripe from '../../../../../utilities/Stripe/getStripe';
import WizardLayout from '../../WizardLayout';
import axios from 'axios';
import styles from './Invoice.module.css'
import { v4 as uuidv4 } from 'uuid';


export default function ShippingAddress(props) {

  const { grandTotal } = props

  const { state, dispatch, total } = useAppContext();

  const [item, setItem] = useState({
    name: 'Total',
    description: 'Thank you!',
    image: 'shorturl.at/ctMX7',
    quantity: 1,
    price: grandTotal,
  });

  const createCheckOutSession = async () => {
    const stripe = await getStripe();
    const checkoutSession = await axios.post('/api/checkout_sessions', {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  function paymentHandler() {

  }


  return (
    <> <WizardLayout {...props}>
      <div className="col-lg-12">
        <div className="account-card">
          <div className="account-title">
            <h4>Shipping Address</h4>
          </div>
          <div className="d-flex gap-3">
            <div className="w-50">
              <div className="col-md-12 col-lg-12">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Md Ishaq"
                    onChange={(e) =>
                      props.dispatchForm({
                        type: "UPDATE_KEY_VALUES",
                        value: { name: e.target.value }
                      })}
                    value={props.form.name}
                  />

                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="iamishaque.business@gmail.com"
                    onChange={(e) =>
                      props.dispatchForm({
                        type: "UPDATE_KEY_VALUES",
                        value: { email: e.target.value }
                      })}
                    value={props.form.email}
                  />

                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="01861135457"
                    onChange={(e) =>
                      props.dispatchForm({
                        type: "UPDATE_KEY_VALUES",
                        value: { phone: e.target.value }
                      })}
                    value={props.form.phone}
                  />

                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Delivery Address">
                  <Form.Control
                    as="textarea"
                    placeholder="624,Royal Road,Timaru,Taranaki,New Zealand-84648"
                    style={{ height: '100px' }}
                    onChange={(e) =>
                      props.dispatchForm({
                        type: "UPDATE_KEY_VALUES",
                        value: { address: e.target.value }
                      })}
                    value={props.form.address}
                  />
                </FloatingLabel>


              </div>

            </div>
            <div className="w-50 position-relative">
              <div className="account-card">
                <div className="account-title">
                  <h4>Order Details</h4>
                </div>
                <div className="account-content">
                  <ul className={styles.invoiceDetails}>

                    <li>
                      <h6>Name</h6>
                      <p>{props.form.name}</p>
                    </li>
                    <li>
                      <h6>Email</h6>
                      <p>{props.form.email}</p>
                    </li>
                    <li>
                      <h6>Phone</h6>
                      <p>{props.form.phone}</p>
                    </li>
                    <li>
                      <h6>Address</h6>
                      <p>{props.form.address}</p>
                    </li>
                    <li>
                      <h6>Payment Method</h6>
                      <p>Stripe</p>
                    </li>
                    <li>
                      <h6>Total<small>(Incl. VAT)</small></h6>
                      <p>${grandTotal}</p>
                    </li>
                  </ul>
                  <div
                    className="position-absolute bottom-0 end-0 start-0"
                    role='button'
                    
                    onClick={createCheckOutSession}

                  >
                    <p>4242424242424242</p>
                    {/* <div className="position-absolute bottom-0 end-0 start-0" role='button' onClick={() => props.wizard.nextStep()}> */}
                    <a className="cart-checkout-btn" role='button' disabled={!props.form.name || !props.form.email || !props.form.phone || !props.form.address}>
                      <span className="checkout-label">Proceed to payment</span>
                      <span className="checkout-price">${grandTotal}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </WizardLayout>



    </>
  )
}
