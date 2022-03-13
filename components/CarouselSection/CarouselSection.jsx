import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaPercentage, FaMoneyBillWaveAlt, FaShoppingCart } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function CarouselSection() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="home-index-slider slider-arrow slider-dots">
            <div className="d-flex flex-column gap-3 align-items-center justify-content-center p-5 d-md-none">
                <h1>free home delivery within 24 hours now.</h1>
                <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                    necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                    excepturi</p>
                <div className="banner-btn">
                    <Link href="/">
                        <a className="btn btn-inline me-3"><FaShoppingCart className='me-2' /><span>shop now</span></a>
                    </Link>
                    <Link href="/">
                        <a className="btn btn-outline"><FaPercentage className='me-2' /><span>get offer</span></a>
                    </Link>
                </div>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" className='d-none d-md-block'>
                <Carousel.Item>
                    <div className="container">
                        <div className="row align-items-center px-3">
                            <div className="col-md-6 col-lg-6 d-flex flex-column gap-3">
                                <h1>free home delivery within 24 hours now.</h1>
                                <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                                    necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                                    excepturi</p>
                                <div className="banner-btn">
                                    <Link href="/">
                                        <a className="btn btn-inline me-3"><FaShoppingCart className='me-2' /><span>shop now</span></a>
                                    </Link>
                                    <Link href="/">
                                        <a className="btn btn-outline"><FaPercentage className='me-2' /><span>get offer</span></a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="position-relative" style={{ width: '100%', height: '90vh' }}>
                                    <Image
                                        className="d-block w-100"
                                        src={"/images/home/index/01.png"}
                                        alt="First slide"
                                        layout='fill'
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row align-items-center px-3">
                            <div className="col-md-6 col-lg-6 d-flex flex-column gap-3">
                                <h1>free home delivery within 24 hours now.</h1>
                                <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                                    necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                                    excepturi</p>
                                <div className="banner-btn">
                                    <Link href="/">
                                        <a className="btn btn-inline me-3"><FaShoppingCart className='me-2' /><span>shop now</span></a>
                                    </Link>
                                    <Link href="/">
                                        <a className="btn btn-outline"><FaPercentage className='me-2' /><span>get offer</span></a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="position-relative" style={{ width: '100%', height: '90vh' }}>
                                    <Image
                                        className="d-block w-100"
                                        src={"/images/home/index/01.png"}
                                        alt="First slide"
                                        layout='fill'
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>

          

        </section>
    )
}
