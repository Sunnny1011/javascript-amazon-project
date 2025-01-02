import { validDeliveryOption } from "./delivery-option.js";
export class Cart {
  cartItems;
  cartQuantity;
  #localStorageCartKey;
  #localStorageQuantityKey;
  constructor(localStorageCartKey, localStorageQuantityKey) {
    this.#localStorageCartKey = localStorageCartKey;
    this.#localStorageQuantityKey = localStorageQuantityKey;
    this.#loadFromStorage();
  }
  #loadFromStorage() {
    this.cartItems =
      JSON.parse(localStorage.getItem(this.#localStorageCartKey)) || [];
    this.cartQuantity =
      JSON.parse(localStorage.getItem(this.#localStorageQuantityKey)) || 0;
  }

  saveToStorage() {
    let addTotalQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      addTotalQuantity += cartItem.quantity;
    });
    localStorage.setItem(
      this.#localStorageCartKey,
      JSON.stringify(this.cartItems)
    );
    localStorage.setItem(this.#localStorageQuantityKey, addTotalQuantity);
    return addTotalQuantity;
  }
  addToCart(productId) {
    let matchingItem;
    let quantity = 0;
    const selectEle = document.querySelector(`.data-select-id-${productId}`);
    quantity = Number(selectEle?.value) || 1;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: 1,
      });
    }

    document.querySelector(".cart-quantity").innerHTML = this.saveToStorage();
  }
  removeFromCart(deletelinkId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== deletelinkId.deleteLink) {
        console.log(cartItem.productId, deletelinkId.deleteLink);
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  }
  updateCart(updatelinkId) {
    const newCart = [];
    let quantity = 0;
    const selectEle = document.querySelector(`.data-select-id-${productId}`);
    quantity = Number(selectEle.value);
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === updatelinkId.updatelink) {
        cartItem.quantity += quantity;
      }
    });
    newCart.push(cartItem);
    this.cartItems = newCart;

    this.saveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    if (!validDeliveryOption(deliveryOptionId)) {
      return;
    } else {
      this.cartItems.forEach((cartItem) => {
        {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;

            matchingItem.deliveryOptionId = Number(deliveryOptionId);
            this.saveToStorage();
          } else return;
        }
      });
    }
  }
}

export const cartClass = new Cart("cart-class", "cart-quantity-class");

// const businessCart = new Cart(
//   "cart-business-class",
//   "cart-business-quantity-class"
// );
