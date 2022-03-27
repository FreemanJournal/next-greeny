import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAppContext } from '../../../../../context/AppContext';
import WizardLayout from '../../WizardLayout';


const DELIVERY_FEE = 100
// let DISCOUNT_RATE = .1
let discount = 10
export default function ShippingAddress(props) {

  const { grandTotal } = props

  const { state, dispatch, total } = useAppContext();


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
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Md Ishaq" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="number" placeholder="01861135457" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="iamishaque.business@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3 pb-5 " controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className='p-3' as="textarea" rows={5} placeholder="624,Royal Road,Timaru,Taranaki,New Zealand-84648" />
                  </Form.Group>
                </Form>
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
                    <span className="checkout-label">Confirm the order</span>
                    <span className="checkout-price">${grandTotal}</span>
                  </a>
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
