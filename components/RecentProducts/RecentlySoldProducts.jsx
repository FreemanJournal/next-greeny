import React from 'react';
import { products } from '../../database/products';
import RecentProduct from './RecentProduct';

const RecentlySoldProducts = () => {
    

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
                        products.map((item, index) => <RecentProduct item={item} key={index}/>)
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