import React, { useEffect, useState } from 'react';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image'

export default function CartItem({index,item,allTotal,setAllTotal}) {
    const { serial, img, name, price, brand, quantity } = item
    const [productQtn, setProductQtn] = useState(quantity)
  
    const onChangeHandler = (value) =>{
        if(value >= 0){
            setProductQtn(value)
        }
       
    }
    useEffect(()=>{
        const initTotal = Object.assign(allTotal,{[serial]: (price * productQtn)})
        setAllTotal({...initTotal,[serial]: (price * productQtn)})
    },[productQtn])
    
    return (
        <li className="cart-item">
            <div className="cart-media w-25" style={{ height: "100px" }}>
                <a href="" className='position-relative d-block' style={{ height: "100px" }}>
                    <Image src={img} alt="product" layout='fill' />
                </a>
                <button className="cart-delete">
                    <i className="far fa-trash-alt"> <FaTrashAlt /></i>
                </button>
            </div>
            <div className="cart-info-group">
                <div className="cart-info">
                    <h6><a href="product-single.html">{name}</a></h6>
                    <p>Unit Price - ${price}</p>
                </div>
                <div className="cart-action-group">
                    <div className="product-action">
                        <button className="action-minus" title="Quantity Minus" onClick={() => productQtn > 0 && setProductQtn((prev) => prev = (+prev) - 1)}>
                            <i className=""> <FaMinus /></i>
                        </button>
                        <input onChange={(e) => onChangeHandler(e.target.value)} className="action-input" title="Quantity Number" type="number" name="quantity" value={productQtn} />
                        <button className="action-plus" title="Quantity Plus" onClick={() => setProductQtn(prev => prev = (+prev) + 1)}>
                            <i className=""> <FaPlus /></i>
                        </button>
                    </div>
                    <h6>${price * productQtn}</h6>
                </div>
            </div>
        </li>
    )
}
