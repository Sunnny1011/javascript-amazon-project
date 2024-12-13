import { products } from "../data/products.js";
import { cart, saveToStorage, removeFromCart } from "./cart.js";
import { calculatePrice } from "../utils/util.js";

export function renderOrderSummaryHTML() {
  let html = ``;
  let quantitySummary = 0;
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let cartMatchingItem;
    products.forEach((productItem) => {
      if (productItem.id === productId) {
        cartMatchingItem = productItem;
      }
    });

    quantitySummary += Number(cartItem.quantity);
    document.querySelector(".order-summary").innerHTML =
      html += `<div class="cart-item-container cart-item-container-${
        cartMatchingItem.id
      }">
              <div class="delivery-date">Delivery date: Tuesday, June 2900</div>
  
              <div class="cart-item-details-grid">
                <img
                  class="product-image"
                  src="${cartMatchingItem.image}"
                />
  
                <div class="cart-item-details">
                  <div class="product-name">
                    ${cartMatchingItem.name}
                  </div>
                  <div class="product-price">$${calculatePrice(
                    cartMatchingItem
                  )}</div>
                  <div class="product-quantity">
                    <span> Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span> </span>
                    <span class="update-quantity-link link-primary"
                    data-update-link="${cartMatchingItem.id}">
                      Update
                    </span>
                    
                    <input class="quantity-link save-quantity-input-${
                      cartMatchingItem.id
                    }" data-input-value="${cartMatchingItem.id}">

                    <span class="save-quantity-link  link-primary" data-input-value="${
                      cartMatchingItem.id
                    }">Save</span>
                    <span class="delete-quantity-link link-primary" 
                    data-delete-link="${cartMatchingItem.id}">
                      Delete
                    </span>
                    
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div class="delivery-option">
                    <input
                      type="radio"
                      checked
                      class="delivery-option-input"
                      name="delivery-option-${cartMatchingItem.id}"
                       data-delivery-price="0"
                    />
                    <div>
                      <div class="delivery-option-date">Tuesday, June 21</div>
                      <div class="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input
                      type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${cartMatchingItem.id}"
                       data-delivery-price="4.99"
                    />
                    <div>
                      <div class="delivery-option-date">Wednesday, June 15</div>
                      <div class="delivery-option-price">$4.99 - Shipping</div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input
                      type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${cartMatchingItem.id}"
                      data-delivery-price="9.99"
                    />
                    <div>
                      <div class="delivery-option-date">Monday, June 13</div>
                      <div class="delivery-option-price" >$9.99 - Shipping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  });
  document.querySelector(
    ".return-to-home-link"
  ).innerHTML = ` ${quantitySummary} items`;

  document.querySelectorAll(".delete-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      const deletelinkId = link.dataset;
      removeFromCart(deletelinkId);
      renderOrderSummaryHTML();
    });
  });

  document.querySelectorAll(".update-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      const updatelinkId = link.dataset;
      console.log(updatelinkId.updateLink);
      const updateEle = document.querySelector(
        `.cart-item-container-${updatelinkId.updateLink}`
      );
      updateEle.classList.add("is-eding-quantity");
    });
  });
  document.querySelectorAll(".save-quantity-link").forEach((button) => {
    button.addEventListener("click", () => {
      let updateQuantity = 0;
      const inputValue = button.dataset;
      let newQuantity = Number(
        document.querySelector(`.save-quantity-input-${inputValue.inputValue}`)
          .value
      );
      if (newQuantity >= 0 && newQuantity < 1000) {
        updateQuantity = newQuantity;
        console.log(updateQuantity);
        cart.forEach((cartItem) => {
          if (inputValue.inputValue === cartItem.productId) {
            cartItem.quantity += updateQuantity;
          }
          saveToStorage();
          renderOrderSummaryHTML();
        });
        const saveEle = document.querySelector(".cart-item-container");
        saveEle.classList.remove("is-eding-quantity");
      } else {
        alert("Not a valid quantity");
      }
    });
  });
  document.querySelectorAll(".save-quantity-input").forEach((input) => {
    input.addEventListener("keydown", () => {});
  });
}
