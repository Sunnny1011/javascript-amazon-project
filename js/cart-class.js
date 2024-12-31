import { validDeliveryOption } from "./delivery-option.js";
export class Cart {
  cartItems;
  #localStorageCartKey;
  #localStorageQuantityKey;
  constructor(localStorageCartKey, localStorageQuantityKey) {
    this.#localStorageCartKey = localStorageCartKey;
    this.#localStorageQuantityKey = localStorageQuantityKey;
    this.#loadFromStorage();
  }
  #loadFromStorage() {
    this.cartItems = JSON.parse(
      localStorage.getItem(this.#localStorageCartKey)
    ) || [
      {
        productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 1,
        deliveryOptionId: 1,
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3,
        deliveryOptionId: 2,
      },
    ];
  }
  cartQuantity = JSON.parse(
    localStorage.getItem(this.#localStorageQuantityKey) || 0
  );
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
    console.log(this.cartItems);
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
