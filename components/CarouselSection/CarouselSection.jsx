import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap'
export default function CarouselSection() {
    return (
        <section className="home-index-slider slider-arrow slider-dots">
            <Carousel fade>
                <Carousel.Item>
                    <div className="position-relative">
                        <Image
                            className="d-block w-100"
                            src="/images/home/classic/01.jpg"
                            alt="First slide"
                            layout='fill'
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <Image
                            className="d-block w-100"
                            src="/images/home/classic/01.jpg"
                            alt="First slide"
                            layout='fill'
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <Image
                            className="d-block w-100"
                            src="/images/home/classic/01.jpg"
                            alt="First slide"
                            layout='fill'
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* <div className="banner-part banner-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-content">
                                <h1>free home delivery within 24 hours now.</h1>
                                <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                                    necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                                    excepturi</p>
                                <div className="banner-btn"><a className="btn btn-inline" href="shop-4column.html"><i
                                    className="fas fa-shopping-basket"></i><span>shop now</span></a><a
                                        className="btn btn-outline" href="offer.html"><i
                                            className="icofont-sale-discount"></i><span>get offer</span></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-Image"><Image src="/images/home/index/01.png" alt="index" height='500' width='1000'/></div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="banner-part banner-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-Image"><Image src="/images/home/index/02.png" alt="index" height='500' width='1000'/></div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="banner-content">
                                <h1>free home delivery within 24 hours now.</h1>
                                <p>Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro
                                    necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto
                                    excepturi</p>
                                <div className="banner-btn"><a className="btn btn-inline" href="shop-4column.html"><i
                                    className="fas fa-shopping-basket"></i><span>shop now</span></a><a
                                        className="btn btn-outline" href="offer.html"><i
                                            className="icofont-sale-discount"></i><span>get offer</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </section>
    )
}
