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
    let tempCart = [...this.state.cart].map(el=> ({...el}));
    let tempProduct = tempCart.filter(el => el.id === id)[0];
    tempProduct.count++;
    tempProduct.total= tempProduct.count * tempProduct.price;
    this.setState({
      cart: [...tempCart]
    }, this.addTotals)
  };
  decrement = id => {
    let tempCart = [...this.state.cart].map(el=> ({...el}));
    let tempProduct = tempCart.filter(el => el.id === id)[0];
    if (tempProduct.count > 1){
    tempProduct.count--;
    tempProduct.total= tempProduct.count * tempProduct.price;
    this.setState({
      cart: [...tempCart]
    }, this.addTotals)
    } else {
      tempProduct.count = 0;
      tempProduct.total = 0;
      this.removeItem(id)
    }
    
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
    let cartSubtotal = 0;
    this.state.cart.map(item => (cartSubtotal += item.total));
    const tempTax = cartSubtotal * 0.1;
    const cartTax = parseFloat(tempTax.toFixed());
    const cartTotal = cartSubtotal + cartTax;
    this.setState({
      cartSubtotal,
      cartTax,
      cartTotal
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
