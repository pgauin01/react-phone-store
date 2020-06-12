import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalDetails: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProduct();
    this.addTotal();
  }
  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
      this.setState({ products: tempProduct });
    });
  };
  getItem = (id) => {
    const product = this.state.products.find((el) => el.id === id);
    return product;
  };

  handleDetails = (id) => {
    const newProduct = this.getItem(id);
    this.setState({ detailProduct: newProduct });
  };
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          product: tempProduct,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({ modalOpen: true, modalDetails: product });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = (id) => {
    const tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    // const index = tempCart.indexOf(selectedProduct);
    // const product = tempCart[index];
    // console.log(product);
    selectedProduct.count = selectedProduct.count + 1;
    selectedProduct.total = selectedProduct.count * selectedProduct.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = (id) => {
    const tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    // const index = tempCart.indexOf(selectedProduct);
    // const product = tempCart[index];
    // console.log(product);
    // console.log(selectedProduct);

    selectedProduct.count = selectedProduct.count - 1;
    selectedProduct.total = selectedProduct.count * selectedProduct.price;
    if (selectedProduct.count >= 1) {
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotal();
        }
      );
    }
    if (selectedProduct.count === 0) {
      this.removeItem(id);
    }
  };
  removeItem = (id) => {
    const tempProduct = [...this.state.products];
    const tempCart = [...this.state.cart];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    const removeItem = tempCart.filter((item) => item.id !== id);

    this.setState(
      () => {
        return { cart: [...removeItem] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let subTotal = this.state.cart.reduce((acc, curr) => acc + curr.total, 0);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
