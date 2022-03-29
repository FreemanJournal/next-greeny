import React from 'react'

export default function SignUp() {
  return (
    <section className="user-form-part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                    <div className="user-form-logo"><a href="index.html"><img src="images/logo.png" alt="logo"/></a></div>
                    <div className="user-form-card">
                        <div className="user-form-title">
                            <h2>Join Now!</h2>
                            <p>Setup A New Account In A Minute</p>
                        </div>
                        <div className="user-form-group">
                            <ul className="user-form-social">
                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Join with facebook</a>
                                </li>
                                <li><a href="#" className="twitter"><i className="fab fa-twitter"></i>Join with twitter</a></li>
                                <li><a href="#" className="google"><i className="fab fa-google"></i>Join with google</a></li>
                                <li><a href="#" className="instagram"><i className="fab fa-instagram"></i>Join with
                                        instagram</a></li>
                            </ul>
                            <div className="user-form-divider">
                                <p>or</p>
                            </div>
                            <form className="user-form">
                                <div className="form-group"><input type="text" className="form-control"
                                        placeholder="Enter your name"/></div>
                                <div className="form-group"><input type="email" className="form-control"
                                        placeholder="Enter your email"/></div>
                                <div className="form-group"><input type="password" className="form-control"
                                        placeholder="Enter your password"/></div>
                                <div className="form-group"><input type="password" className="form-control"
                                        placeholder="Enter repeat password"/></div>
                                <div className="form-check mb-3"><input className="form-check-input" type="checkbox" value=""
                                        id="check"/><label className="form-check-label" htmlFor="check">Accept all the <a
                                            href="#">Terms & Conditions</a></label></div>
                                <div className="form-button"><button type="submit">register</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="user-form-remind">
                        <p>Already Have An Account?<a href="login.html">login here</a></p>
                    </div>
                    <div className="user-form-footer">
                        <p>Greeny | &COPY; Copyright by <a href="#">Mironcoder</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
