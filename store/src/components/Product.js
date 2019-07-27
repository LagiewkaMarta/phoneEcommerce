import React, { Component } from "react";
import styled from "styled-components";
import styles from "../App.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto com-md-6 col-lg-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() =>
              console.log("you clicked me image container from Product.js")
            }
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart}
              onClick={() => {
                console.log("Added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* card footer */}
          <footer className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </footer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;

    .card-img-top {
      transition: all 1s linear;
    }
    &:hover .card-img-top {
      transform: scale(1.2);
    }
    &:hover .cart-btn {
      transform: translate(0, 0);
    }
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: ${styles.lightBlue};
    border: none;
    color: ${styles.mainWhite};
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0.5rem 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
    &:hover {
      color: ${styles.mainBlue};
      cursor: pointer;
    }
  }
`;
