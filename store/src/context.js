import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct,
    cart: [],
    modalOpen: true,
    modalProduct: detailProduct
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

  getItem = id => this.state.products.find(item => item.id === id);

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product
    });
  };
  addToCart = id => {
    const tempItems = [...this.state.products];
    const prod = this.getItem(id);
    const index = tempItems.indexOf(prod);
    const copy = tempItems.map(el =>
      el.id === id
        ? { ...el, inCart: true, count: 1, price: el.price, total: el.price }
        : el
    );
    this.setState({
      products: copy,
      cart: [...this.state.cart, copy[index]]
    });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product, modalOpen: true
    })
  }
  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
