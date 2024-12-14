import { products } from "../data/products.js";
import {
  cart,
  saveToStorage,
  removeFromCart,
  updateDeliveryOption,
} from "./cart.js";
import calculatePrice from "../utils/util.js";
import { deliveryOption } from "./delivery-option.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { renderPaymentSummaryHTML } from "./payment-summary.js";
export let paymentItem = {};
export function renderOrderSummaryHTML() {
  let html = ``;
  let quantitySummary = 0;
  if (cart.length > 0) {
    cart.forEach((cartItem) => {
      const productId = cartItem.productId;
      let cartMatchingItem;
      products.forEach((productItem) => {
        if (productItem.id === productId) {
          cartMatchingItem = productItem;
        }
      });
      let deliveryOptionItem;
      const deliveryOptionId = Number(cartItem.deliveryOptionId);
      deliveryOption.forEach((optionItem) => {
        if (optionItem.deliveryOptionId === deliveryOptionId) {
          deliveryOptionItem = optionItem;
        }
      });
      const time = dayjs();
      paymentItem = deliveryOptionItem;
      const deliveryTime = time.add(deliveryOptionItem.deliveryDays, "days");
      const deliveryTimeString = deliveryTime.format("dddd, MMMM D");
      quantitySummary += Number(cartItem.quantity);
      document.querySelector(".order-summary").innerHTML =
        html += `<div class="cart-item-container cart-item-container-${
          cartMatchingItem.id
        }">
              <div class="delivery-date">Delivery date: ${deliveryTimeString}</div>
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
                    
                    <input class="save-quantity-input save-quantity-input-${
                      cartMatchingItem.id
                    }" data-input-value="${cartMatchingItem.id}">

                    <span class="save-quantity-button  link-primary" data-input-value="${
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
               ${renderDiliveryOptionHTML(cartMatchingItem, cartItem)}
                </div></div>
              </div>`;
    });
  } else {
    document.querySelector(".order-summary").innerHTML = "";
    renderPaymentSummaryHTML();
  }

  function renderDiliveryOptionHTML(cartMatchingItem, cartItem) {
    let html = "";
    deliveryOption.forEach((optionItem) => {
      const isChecked =
        optionItem.deliveryOptionId === Number(cartItem.deliveryOptionId);
      const time = dayjs();
      const deliveryTime = time.add(optionItem.deliveryDays, "days");
      const deliveryTimeString = deliveryTime.format("dddd, MMMM D");
      const deliveryPriceString =
        optionItem.priceCents === 0 ? "Free" : calculatePrice(optionItem);
      html += `<div class="delivery-option">
                    <input
                      type="radio"
                   ${isChecked ? "checked " : ""}
                      class="delivery-option-input-button"
                      data-product-id ="${cartMatchingItem.id}"
                      data-delivery-option-id="${optionItem.deliveryOptionId}"
                      name="delivery-option-${cartMatchingItem.id}"
                    />
                    <div>
                      <div class="delivery-option-date">${deliveryTimeString}</div>
                      <div class="delivery-option-price" >$${deliveryPriceString} - Shipping</div>
                    </div>
                  </div>`;
    });
    return html;
  }
  document.querySelector(
    ".return-to-home-link"
  ).innerHTML = ` ${quantitySummary} items`;

  document.querySelectorAll(".delete-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      const deletelinkId = link.dataset;
      removeFromCart(deletelinkId);
      renderOrderSummaryHTML();
      renderPaymentSummaryHTML();
    });
  });

  document.querySelectorAll(".update-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      const updatelinkId = link.dataset;
      const updateEle = document.querySelector(
        `.cart-item-container-${updatelinkId.updateLink}`
      );
      updateEle.classList.add("is-eding-quantity");
    });
  });
  document.querySelectorAll(".save-quantity-button").forEach((button) => {
    button.addEventListener("click", () => {
      let updateQuantity = 0;
      const inputValue = button.dataset;
      let newQuantity = Number(
        document.querySelector(`.save-quantity-input-${inputValue.inputValue}`)
          .value
      );
      if (newQuantity >= 0 && newQuantity < 1000) {
        updateQuantity = newQuantity;
        cart.forEach((cartItem) => {
          if (inputValue.inputValue === cartItem.productId) {
            cartItem.quantity += updateQuantity;
          }
          saveToStorage();
          renderOrderSummaryHTML();
          renderPaymentSummaryHTML();
        });
        const saveEle = document.querySelector(".cart-item-container");
        saveEle.classList.remove("is-eding-quantity");
      } else {
        alert("Not a valid quantity");
      }
    });
  });
  document.querySelectorAll(".save-quantity-input").forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        let updateQuantity = 0;
        const inputValue = button.dataset;
        let newQuantity = Number(
          document.querySelector(
            `.save-quantity-input-${inputValue.inputValue}`
          ).value
        );
        if (newQuantity >= 0 && newQuantity < 1000) {
          updateQuantity = newQuantity;
          cart.forEach((cartItem) => {
            if (inputValue.inputValue === cartItem.productId) {
              cartItem.quantity += updateQuantity;
            }
            saveToStorage();
            renderOrderSummaryHTML();
            renderPaymentSummaryHTML();
          });
          const saveEle = document.querySelector(".cart-item-container");
          saveEle.classList.remove("is-eding-quantity");
        } else {
          alert("Not a valid quantity");
        }
      }
    });
  });
  document
    .querySelectorAll(".delivery-option-input-button")
    .forEach((element) => {
      element.addEventListener("click", () => {
        const { productId, deliveryOptionId } = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummaryHTML();
        renderPaymentSummaryHTML();
      });
    });
}
