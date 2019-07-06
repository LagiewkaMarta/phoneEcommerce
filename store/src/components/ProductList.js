import React, { Component } from 'react'
import Product from "./Product.js";
import Title from "./Title";
import {storeProducts} from "../data";
export default class ProductList extends Component {
    state = {
        products: storeProducts,
    }
    render() {
        console.log(this.state.products)
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row"></div>
                    </div>
                </div>
                {/* <Product></Product> */}
            </>
        )
    }
}
