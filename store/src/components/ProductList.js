import React, { Component } from 'react'
import Product from "./Product.js";
import Title from "./Title";
import {ProductConsumer} from "../context";
export default class ProductList extends Component {

    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    // console.log(value);
                                    return value.products.map(product => {
                                        
                                        return <Product key={product.id} product={product}></Product>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                {/* <Product></Product> */}
            </>
        )
    }
}
