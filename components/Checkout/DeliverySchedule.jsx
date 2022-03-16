import React, { useState } from 'react'

export default function DeliverySchedule() {
  const [isActive, setIsActive] = useState();
  const activeHandler = (id) =>{
    setIsActive(id)
  }
  return (
    <div className="col-lg-12">
      <div className="account-card">
        <div className="account-title">
          <h4>Delivery Schedule</h4>
        </div>
        <div className="account-content">
          <div className="row">
            <div className="col-md-6 col-lg-4 alert fade show">
              <div className={`profile-card schedule ${isActive === 'schedule-1' && 'active'}`} onClick={()=>activeHandler('schedule-1')}>
                <h6>express</h6>
                <p>90 min express delivery</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 alert fade show">
              <div className={`profile-card schedule ${isActive === 'schedule-2' && 'active'}`} onClick={()=>activeHandler('schedule-2')}>
                <h6>8am-10pm</h6>
                <p>8.00 AM - 10.00 PM</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 alert fade show">
              <div className={`profile-card schedule ${isActive === 'schedule-3' && 'active'}`}  onClick={()=>activeHandler('schedule-3')}>
                <h6>Next day</h6>
                <p>Next day or Tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
