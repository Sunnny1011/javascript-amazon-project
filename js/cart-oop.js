import { validDeliveryOption } from "./delivery-option.js";

function Cart(localStorageCartKey, localStorageQuantityKey) {
  const cart = {
    cartItems: undefined,
    loadFromStorage() {
      this.cartItems =
        JSON.parse(localStorage.getItem(localStorageCartKey)) || [];
      console.log(this.cartItems);
    },
    cartQuantity: JSON.parse(
      localStorage.getItem(localStorageQuantityKey) || 0
    ),
    saveToStorage() {
      let addTotalQuantity = 0;
      this.cartItems.forEach((cartItem) => {
        addTotalQuantity += cartItem.quantity;
      });
      localStorage.setItem(localStorageCartKey, JSON.stringify(this.cartItems));
      localStorage.setItem(localStorageQuantityKey, addTotalQuantity);
      return addTotalQuantity;
    },
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
    },
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
    },
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
    },
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
    },
  };
  return cart;
}
const cart = Cart("cart-oop", "cart-quantity-oop");
const businessCart = Cart("cart-business-oop", "cart-business-quantity-oop");
cart.loadFromStorage();
businessCart.loadFromStorage();
