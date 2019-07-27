import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  };

  setProducts = () => {
    let products = storeProducts.map(product => ({ ...product }));
    this.setState({
      products
    });
  };
  componentDidMount() {
    this.setProducts();
  }
  handleDetail = () => {
    console.log("i am handling the detail");
  };
  addToCart = () => {
    console.log("i am adding to cart");
  };
  test = () => {
    console.log("state", this.state.products[5].inCart);
    console.log("data", storeProducts[5].inCart);
    const temp = [...this.state.products];
    temp[5].inCart = true;
    this.setState(() => ({ products: temp }), () => {
      console.log("state", this.state.products[5].inCart);
      console.log("data", storeProducts[5].inCart);
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
          <button onClick={this.test}>please send hepl</button>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
