import React, { useState } from 'react'
import { FaPlus, FaMinus, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaAngleRight, FaAngleLeft, FaTimes, FaHeart } from 'react-icons/fa'
import Slider from "react-slick";

export default function ProductViewModal({ showModal, setShowModal }) {
    const [addRemoveItems, setAddRemoveItems] = useState(false);
    const [slider, setSlider] = useState();


    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src="images/product/01.jpg" alt="product" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
    };
    return (
        <div className="modal fade show" id="product-view" style={{display:`${showModal ? 'block' :'none'}` , paddingRight: `${showModal && '16px'}`}} role={showModal && "dialog"} aria-modal={showModal && "true"}>
            <div className="modal-dialog">
                <div className="modal-content"><button className="modal-close icofont-close" data-bs-dismiss="modal" onClick={() => setShowModal(prv => !prv)}> <FaTimes /> </button>
                    <div className="product-view">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="view-gallery">
                                    <div className="view-label-group"><label className="view-label new">new</label><label
                                        className="view-label off">-10%</label></div>
                                    <ul className="preview-slider slider-arrow">
                                        <i className="dandik slick-arrow" style={{ display: "block" }} onClick={() => slider.slickNext()}> <FaAngleRight /> </i>
                                        <Slider ref={c => setSlider(c)} {...settings}>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                            <li><img src="images/product/01.jpg" alt="product" /></li>
                                        </Slider>
                                        <i className="bamdik slick-arrow" style={{ display: "block" }} onClick={() => slider.slickPrev()}> <FaAngleLeft /> </i>

                                    </ul>
                                   
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="view-details">
                                    <h3 className="view-name"><a href="product-video.html">existing product name</a></h3>
                                    <div className="view-meta">
                                        <p>SKU:<span>1234567</span></p>
                                        <p>BRAND:<a href="#">radhuni</a></p>
                                    </div>
                                    <div className="view-rating"><i className="active icofont-star"></i><i
                                        className="active icofont-star"></i><i className="active icofont-star"></i><i
                                            className="active icofont-star"></i><i className="icofont-star"></i><a
                                                href="product-video.html">(3 reviews)</a></div>
                                    <h3 className="view-price"><del>$38.00</del><span>$24.00<small>/per kilo</small></span></h3>
                                    <p className="view-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora
                                        magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos
                                        reprehenderit fuga</p>
                                    <div className="view-list-group"><label className="view-list-title">tags:</label>
                                        <ul className="view-tag-list">
                                            <li><a href="#">organic</a></li>
                                            <li><a href="#">vegetable</a></li>
                                            <li><a href="#">chilis</a></li>
                                        </ul>
                                    </div>
                                    <div className="view-list-group"><label className="view-list-title">Share:</label>
                                        <ul className="view-share-list">
                                            <li><a href="#" className="icofont-twitter" title="Twitter"><FaTwitter /></a></li>
                                            <li><a href="#" className="icofont-linkedin" title="Linkedin"><FaLinkedin /></a></li>
                                            <li><a href="#" className="icofont-instagram" title="Instagram"><FaInstagram /></a></li>
                                            <li><a href="#" className="icofont-facebook" title="Facebook"> <FaFacebook /> </a></li>
                                        </ul>
                                    </div>
                                    <div className="view-add-group">
                                        <button className="product-add" title="Add to Cart" onClick={() => setAddRemoveItems(prev => !prev)} style={{ display: `${addRemoveItems && 'none'}` }}>
                                            <i className="fas fa-shopping-basket"></i><span>add to cart</span>
                                        </button>

                                        <div className="product-action" style={{ display: `${addRemoveItems && 'flex'}` }}>
                                            <button className="action-minus" title="Quantity Minus">
                                                <i className="icofont-minus"> <FaMinus /> </i>
                                            </button>
                                            <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                            <button className="action-plus" title="Quantity Plus">
                                                <i className="icofont-plus"> <FaPlus /> </i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="view-action-group">
                                        <a className="view-wish wish" href="#" title="Add Your Wishlist">
                                            <i className="icofont-heart"> <FaHeart /> </i><span>add to wish</span>
                                        </a>
                                        {/* <a className="view-compare" href="compare.html" title="Compare This Item">
                                            <i className="fas fa-random"></i><span>Compare This</span>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
