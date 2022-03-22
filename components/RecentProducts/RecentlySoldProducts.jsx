import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '../../context/AppContext';
import { products } from '../../database/products';

const RecentlySoldProducts = () => {
    const { state, dispatch } = useAppContext();

    // useEffect(() => {

    //     // if (typeof window !== 'undefined') {
    //     //     localStorage.setItem('cartProduct', JSON.stringify(products))
    //     // }
    // }, [])
   
    function addProductHandler(item) {
        dispatch({ type: 'add_product', value: item })
    }

    return (
        <section className="section recent-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>recently sold items</h2>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {
                        products.map((item, index) => {
                            const { serial, img, name, price, brand,  quantity } = item
                            const selectedPro = state?.find(item => item?.serial === serial)
                            return (
                                <div className="col" key={serial}>
                                    <div className="product-card" >
                                        <div className="product-media">
                                            <div className="product-label">
                                                <label className="label-text sale">{selectedPro?.quantity || 0}</label>
                                            </div>

                                            <div className="position-relative">
                                                <a className="product-image position-relative d-block" style={{ height: "200px" }}>
                                                    <Image src={img} alt="product" layout='fill' />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="product-content">
                                            <h6 className="product-name"><a href="product-video.html">{name}</a></h6>
                                            <h6 className="product-price"><span>${price}<small>/kg</small></span></h6>

                                            <button className="product-add" type='button' title="Add to Cart" onClick={() => addProductHandler(item)}><i className="fas fa-shopping-basket"></i><span>add</span></button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25"><a href="shop-4column.html" className="btn btn-outline"><i
                            className="fas fa-eye"></i><span>show more</span></a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RecentlySoldProducts;
// export default React.memo(RecentlySoldProducts);