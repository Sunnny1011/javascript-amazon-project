import { products } from "../data/products.js";
import { cart, removeFromCart } from "./cart.js";
import { calculatePrice } from "../utils/util.js";
export let deliveryPrice = 0;
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
      html += `<div class="cart-item-container">
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
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
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
                       data-delivery-price="7"
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
                       data-delivery-price="3"
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
                      data-delivery-price="0"
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

  document.querySelectorAll(".delivery-option-input").forEach((price) => {
    price.addEventListener("click", () => {
      deliveryPrice = price.dataset;
      console.log(deliveryPrice.deliveryPrice);
    });

    document.querySelectorAll(".delete-quantity-link").forEach((link) => {
      link.addEventListener("click", () => {
        const deletelinkId = link.dataset;
        removeFromCart(deletelinkId);
        renderSummaryHTML();
      });
    });
  });
}
