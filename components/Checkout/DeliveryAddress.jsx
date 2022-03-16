import React, { useState } from 'react'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import CheckoutModal from './CheckoutModal';

export default function DeliveryAddress() {

  const [isActive, setIsActive] = useState();
  const [modalShow, setModalShow] = useState(false);
  const addressOptions = ['home', 'office', 'Bussiness', 'academy', 'others']

  const activeHandler = (id) => {
    setIsActive(id)
  }
  
  return (
    <>
      <div className="col-lg-12">
        <div className="account-card">
          <div className="account-title">
            <h4>delivery address</h4><button data-bs-toggle="modal" data-bs-target="#address-add" onClick={() => setModalShow(prev => !prev)}>add
              address</button>
          </div>
          <div className="account-content">
            <div className="row">
              <div className="col-md-6 col-lg-4 alert fade show">
                <div className={`profile-card address ${isActive === 'address-1' && 'active'}`} onClick={() => activeHandler('address-1')}>
                  <h6>Home</h6>
                  <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                  <ul className="user-action">
                    <li><button className="edit icofont-edit" title="Edit This"
                      data-bs-toggle="modal" data-bs-target="#address-edit"> <FiEdit2 /> </button></li>
                    <li><button className="trash icofont-ui-delete" title="Remove This"
                      data-bs-dismiss="alert"> <FiTrash /> </button></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 alert fade show">
                <div className={`profile-card address ${isActive === 'address-2' && 'active'}`} onClick={() => activeHandler('address-2')}>
                  <h6>Office</h6>
                  <p>east tejturi bazar, dhaka-1200. word no-04, road no-13/c, house no-4/b</p>
                  <ul className="user-action">
                    <li><button className="edit icofont-edit" title="Edit This"
                      data-bs-toggle="modal" data-bs-target="#address-edit"> <FiEdit2 /> </button></li>
                    <li><button className="trash icofont-ui-delete" title="Remove This"
                      data-bs-dismiss="alert"> <FiTrash /> </button></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 alert fade show">
                <div className={`profile-card address ${isActive === 'address-3' && 'active'}`} onClick={() => activeHandler('address-3')}>
                  <h6>Bussiness</h6>
                  <p>kawran bazar, dhaka-1100. word no-02, road no-13/d, house no-7/m</p>
                  <ul className="user-action">
                    <li><button className="edit icofont-edit" title="Edit This"
                      data-bs-toggle="modal" data-bs-target="#address-edit"> <FiEdit2 /> </button></li>
                    <li><button className="trash icofont-ui-delete" title="Remove This"
                      data-bs-dismiss="alert"> <FiTrash /> </button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="address-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content"><button className="modal-close" data-bs-dismiss="modal"><i
            className="icofont-close"></i></button>
            <div className="modal-form">
              <div className="form-title">
                <h3>add new address</h3>
              </div>
              <div className="form-group"><label className="form-label">title</label><select className="form-select">
                <option selected>choose title</option>
                <option value="home">home</option>
                <option value="office">office</option>
                <option value="Bussiness">Bussiness</option>
                <option value="academy">academy</option>
                <option value="others">others</option>
              </select></div>
              <div className="form-group">
                <label className="form-label">address</label>
                <textarea className="form-control" placeholder="Enter your address"></textarea>
              </div>
              <button className="form-btn" type="button">save address info</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="address-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content"><button className="modal-close" data-bs-dismiss="modal"><i
            className="icofont-close"></i></button>
            <div className="modal-form">
              <div className="form-title">
                <h3>edit address info</h3>
              </div>
              <div className="form-group"><label className="form-label">title</label><select className="form-select">
                <option value="home" selected>home</option>
                <option value="office">office</option>
                <option value="Bussiness">Bussiness</option>
                <option value="academy">academy</option>
                <option value="others">others</option>
              </select></div>
              <div className="form-group"><label className="form-label">address</label><textarea className="form-control"
                placeholder="jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A"></textarea>
              </div><button className="form-btn" type="button">save address info</button>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title='address'
        options={addressOptions}
      />
    </>
  )
}
