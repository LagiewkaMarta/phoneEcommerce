import React, { Component } from 'react'
import Product from "./Product.js"
export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>hello from product list</h3>
                <Product></Product>
            </div>
        )
    }
}
