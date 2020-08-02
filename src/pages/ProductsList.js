import React, {useContext} from 'react';
import {StoreContext} from '../context'
import { ProductDetails } from '../components/ProductDetails';
export const ProductsList = () => {
    const context = useContext(StoreContext);
    const {products} = context.store;
    return (
        <div>
           {products.map(product=>{
               return <ProductDetails key={product.id} product={product}/>
           })}
        </div>
    )
}
