import { products } from "../data/products.js";
import { cartClass } from "./cart-class.js";
import calculatePrice from "../utils/util.js";
import { calculateDeliveryDate, deliveryOption } from "./delivery-option.js";
import { renderPaymentSummaryHTML } from "./payment-summary.js";
export function renderOrderSummaryHTML() {
  let html = ``;
  let quantitySummary = 0;
  if (cartClass.cartItems.length > 0) {
    cartClass.cartItems.forEach((cartItem) => {
      const productId = cartItem.productId;
      let cartMatchingItem;
      let deliveryTimeString;
      products.forEach((productItem) => {
        if (productItem.id === productId) {
          cartMatchingItem = productItem;
        }
      });
      const deliveryOptionId = Number(cartItem.deliveryOptionId);
      deliveryOption.forEach((optionItem) => {
        if (optionItem.deliveryOptionId === deliveryOptionId) {
          deliveryTimeString = calculateDeliveryDate(optionItem);
        }
      });
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
                    cartMatchingItem.priceCents
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
      const deliveryTimeString = calculateDeliveryDate(optionItem);
      const deliveryPriceString =
        optionItem.priceCents === 0
          ? "Free"
          : calculatePrice(optionItem.priceCents);
      html += `<div class="delivery-option delivery-option-${
        cartMatchingItem.id
      }-${optionItem.deliveryOptionId}">
                    <input
                      type="radio"
                   ${isChecked ? "checked " : ""}
                      class="delivery-option-input-button delivery-option-input-button-${
                        cartMatchingItem.id
                      }-${optionItem.deliveryOptionId}"
                      data-product-id ="${cartMatchingItem.id}"
                      data-delivery-option-id="${
                        optionItem.deliveryOptionId
                      }"                 
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
      cartClass.removeFromCart(deletelinkId);
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
        cartClass.cartItems.forEach((cartItem) => {
          if (inputValue.inputValue === cartItem.productId) {
            cartItem.quantity += updateQuantity;
          }
          cartClass.saveToStorage();
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
            cartClass.saveToStorage();
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
        cartClass.updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummaryHTML();
        renderPaymentSummaryHTML();
      });
    });
}
