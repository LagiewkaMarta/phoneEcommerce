import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
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

  getItem = id => {
    let result = this.state.products.find(item => item.id === id);

    return result;
  };

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
    this.setState(
      {
        products: copy,
        cart: [...this.state.cart, copy[index]]
      },
      () => this.addTotals()
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      modalOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  increment = id => {
    console.log("this is incremet");
  };
  decrement = id => {
    console.log("this is decremet");
  };
  removeItem = id => {
    let tempProducts = [...this.state.products].map(el => ({...el}));
    let tempCart = [...this.state.cart].map(el=> ({...el}));
    tempCart = tempCart.filter(item => item.id !== id);
    let removedProduct = tempProducts.filter(el => el.id === id)[0];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({
      cart: [...tempCart],
      products: [...tempProducts]
    }, this.addTotals)
  };
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    // subTotal = this.state.cart.reduce((acc,curr) => { return acc + (curr.price * curr.count)}, 0);
    // this.setState({
    //   cartSubtotal:subTotal
    // })
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed());
    const total = subTotal + tax;
    this.setState({
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          addTotals: this.addTotals
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
