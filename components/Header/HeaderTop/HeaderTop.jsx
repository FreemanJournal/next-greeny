import React from 'react'
export default function HeaderTop() {
    return (
        <>
            <div className="backdrop"></div><a className="backtop fas fa-arrow-up" href="#"></a>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="header-top-welcome">
                                <p>Welcome to Ecomart in Your Dream Online Store!</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3">
                            <div className="header-top-select">
                                <div className="header-select"><i className="icofont-world"></i>
                                    <select className="select" defaultValue='english'>
                                        <option value="english">english</option>
                                        <option value="bangali">bangali</option>
                                        <option value="arabic">arabic</option>
                                    </select>
                                </div>
                                <div className="header-select"><i className="icofont-money"></i>
                                    <select className="select" defaultValue='english'>
                                        <option value="english">doller</option>
                                        <option value="bangali">pound</option>
                                        <option value="arabic">taka</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-4">
                            <ul className="header-top-list">
                                <li><a href="offer.html">offers</a></li>
                                <li><a href="faq.html">need help</a></li>
                                <li><a href="contact.html">contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
