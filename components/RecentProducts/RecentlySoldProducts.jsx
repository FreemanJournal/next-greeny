import React, { useEffect } from 'react'
import Image from 'next/image'

import { FaRandom, FaPlay, FaEye, FaPlus, FaMinus } from 'react-icons/fa'
import { useAppContext } from '../../context/AppContext';
import { products } from '../../database/products';
import { v4 as uuidv4 } from 'uuid';
import styles from './RecentlySoldProducts.module.css'
export default function RecentlySoldProducts() {
    const { state, dispatch } = useAppContext();
    // console.log(uuidv4());
    console.log(state);

    useEffect(() => {
        // dispatch({ type: 'add_number', value: 3 })
        // dispatch({ type: 'init_stored', value: 30 })
        // if (typeof window !== 'undefined') {
        //     localStorage.setItem('cartProduct', JSON.stringify(products))
        // }
    }, [])

    const addProductHandler = (item) =>{
       dispatch({type:'add_product',value:item})
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
                            const { serial, img, name, price, brand, quantity } = item

                            return (
                                <div className="col" key={uuidv4()}>
                                    <div className="product-card" >
                                        <div className="product-media">
                                            <div className="product-label">
                                                <label className="label-text sale">sale</label>
                                            </div>
                                            <button className="product-wish wish"><i className="fas fa-heart"></i></button>
                                            <a className="product-image position-relative d-block" style={{ height: "250px" }}>
                                                <Image src={img} alt="product" layout='fill' />
                                            </a>

                                        </div>
                                        <div className="product-content">
                                            <h6 className="product-name"><a href="product-video.html">{name}</a></h6>
                                            <h6 className="product-price"><span>${price}<small>/kg</small></span></h6>
                                            <div className="product-action" >
                                                <button className="action-minus" title="Quantity Minus">
                                                    <i className="icofont-minus"><FaMinus /> </i>
                                                </button>
                                                <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                                <button className="action-plus" title="Quantity Plus">
                                                    <i className="icofont-plus"><FaPlus /></i>
                                                </button>
                                            </div>
                                            <button className="product-add" title="Add to Cart" onClick={()=>addProductHandler(item)}><i className="fas fa-shopping-basket"></i><span>add</span></button>

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
