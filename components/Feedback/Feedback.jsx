import React, { useState } from 'react'
import { FaStar, FaQuoteLeft, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";




export default function Feedback() {
    const [slider, setSlider] = useState();
    const settings = {
        className: "center",
        centerPadding: "10px",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        initialSlide: 0,
        nextArrow: <></>,
        prevArrow: <></>,
    };
    return (
        <>
            <section className="section testimonial-part">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>client&apos;s feedback</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-slider slider-arrow position-relative">
                                <i className="dandik slick-arrow" style={{ display: "block" }} onClick={() => slider.slickNext()}> <FaAngleRight /> </i>
                                <Slider ref={c => setSlider(c)} {...settings}>

                                    <div className="testimonial-card"><i className=""> <FaQuoteLeft /> </i>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul className='d-flex justify-content-center gap-3'>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                        </ul><img src="images/avatar/01.jpg" alt="testimonial" />
                                    </div>
                                    <div className="testimonial-card"><i className=""> <FaQuoteLeft /> </i>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul className='d-flex justify-content-center gap-3'>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                        </ul><img src="images/avatar/02.jpg" alt="testimonial" />
                                    </div>
                                    <div className="testimonial-card"><i className=""> <FaQuoteLeft /> </i>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul className='d-flex justify-content-center gap-3'>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                        </ul><img src="images/avatar/03.jpg" alt="testimonial" />
                                    </div>
                                    <div className="testimonial-card"><i className=""><FaQuoteLeft /> </i>
                                        <p>Lorem ipsum dolor consectetur adipisicing elit neque earum sapiente vitae obcaecati
                                            magnam doloribus magni provident ipsam</p>
                                        <h5>mahmud hasan</h5>
                                        <ul className='d-flex justify-content-center gap-3'>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                            <li className=""> <FaStar /> </li>
                                        </ul><img src="images/avatar/04.jpg" alt="testimonial" />
                                    </div>
                                </Slider>
                                <i className="bamdik slick-arrow" style={{ display: "block" }} onClick={() => slider.slickPrev()}> <FaAngleLeft /> </i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
