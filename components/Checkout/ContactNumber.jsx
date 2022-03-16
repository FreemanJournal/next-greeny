import React, { useState } from 'react'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import CheckoutModal from './CheckoutModal';

const database = [
  { title: 'primary', number: '+8801838288389' },
  { title: 'secondary', number: '+8801747875727' },
  { title: 'secondary', number: '+8801941101915' }
]
export default function ContactNumber() {
  const [isActive, setIsActive] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState();
  const contactOptions = ['primary', 'secondary']
  const activeHandler = (id) => {
    setIsActive(id)
  }
  const addNewContact = () => {
    setModalShow(prev => !prev)
    setData('')

  }
  const editHandler = (data) => {
    setModalShow(prev => !prev)
    setData(data)
  }
  return (
    <>
      <div className="col-lg-12">
        <div className="account-card">
          <div className="account-title">
            <h4>contact number</h4><button data-bs-toggle="modal" data-bs-target="#contact-add" onClick={addNewContact}>add contact</button>
          </div>
          <div className="account-content">
            <div className="row">
              {
                database.map((contact, index) => {
                  return (
                    <div className="col-md-6 col-lg-4 alert fade show" key={index}>
                      <div className={`profile-card contact ${isActive === index && 'active'}`} onClick={() => activeHandler(index)}>
                        <h6>{contact.title}</h6>
                        <p>{contact.number}</p>
                        <ul>
                          <li>
                            <button className="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit" onClick={() => editHandler(contact)}><FiEdit2 /></button>
                          </li>
                          <li>
                            <button className="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"><FiTrash /></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>



      <CheckoutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title='contact'
        options={contactOptions}
        data={data}
      />
    </>
  )
}
