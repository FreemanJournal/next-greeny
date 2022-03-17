import { Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { useEffect, useState } from 'react'
export default function CheckoutModal(props) {

    const { onHide, title, options, data } = props

    const initValue = data && +(data?.number)
    const [updateData, setUpdateData] = useState(initValue) //initial value only update on first render - re-rendering does not set the initial value

    useEffect(() => setUpdateData(initValue), [initValue])
    const onChangeHandler = ({ target: { name, value } }) => { setUpdateData(value) }
    // const onChangeHandler = ({target:{name,value}})=>{setUpdateData({ ...updateData, [name]: value })}

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalDialog>
                <button
                    className="modal-close"
                    data-bs-dismiss="modal"
                    onClick={onHide}
                >
                    <i className="icofont-close">
                        <FaTimes />
                    </i>
                </button>
                <form className="modal-form">
                    <div className="form-title">
                        {
                            data ? <h3>Edit {title} Info</h3> : <h3>add new {title}</h3>
                        }
                    </div>
                    {
                        options && (
                            <div className="form-group">
                                <label className="form-label">title</label>
                                <select className="form-select" defaultChecked>
                                    {options.map((op) => (
                                        <option value={op} key={op}>{op}</option>
                                    ))}
                                </select>
                            </div>
                        )
                    }
                    {title === 'contact' ? (
                        <div className="form-group">
                            <label className="form-label">number</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Enter your number"
                                name='contactNumber'
                                onChange={onChangeHandler}
                                value={updateData}
                            />
                        </div>
                    ) : title === 'address' ? (
                        <div className="form-group">
                            <label className="form-label">address</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter your address"
                                name='contactAddress'
                                onChange={onChangeHandler}
                            ></textarea>
                        </div>
                    ) : (
                        <div className="form-group">
                            <label className="form-label">card number</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your card number"
                                name='cardNumber'
                                onChange={onChangeHandler}
                            />
                        </div>
                    )}

                    <button className="form-btn" type="button">
                        save {title} info
                    </button>
                </form>
            </ModalDialog>
        </Modal>
    )
}
