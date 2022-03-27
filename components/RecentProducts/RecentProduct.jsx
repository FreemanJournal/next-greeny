import React from 'react'
import Image from 'next/image';
import { useAppContext } from '../../context/AppContext';

export default function RecentProduct({ item }) {
    const { state, dispatch } = useAppContext();

    const { serial, img, name, price, brand, quantity } = item

    const selectedPro = state?.find(item => item?.serial === serial)

   

    function addProductHandler(item) {
        dispatch({ type: 'add_product', value: { item, productQtn: 1 } })
    }



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
}
