import { products } from "../data/products.js";
import { cart } from "./cart.js";
import { calculatePrice } from "../utils/util.js";
import { deliveryOption } from "./delivery-option.js";

export function renderPaymentSummaryHTML() {
  let html = "";
  let cartMatchingItem;
  let deliveryOptionItem;
  let orderPrice = 0;
  let shippingHandling = 0;
  let beforeTax = 0;
  let estimatedTax = 0;
  let orderTotal = 0;
  let quantity = 0;
  cart.forEach((cartItem) => {
    products.forEach((productItem) => {
      if (productItem.id === cartItem.productId) {
        cartMatchingItem = productItem;
        quantity += cartItem.quantity;
        orderPrice += calculatePrice(cartMatchingItem) * cartItem.quantity;
      }
    });
    deliveryOption.forEach((deliveryItem) => {
      if (deliveryItem.deliveryOptionId === cartItem.deliveryOptionId) {
        deliveryOptionItem = deliveryItem;
        shippingHandling += calculatePrice(deliveryOptionItem);
      }
    });

    beforeTax = orderPrice + shippingHandling;

    estimatedTax = beforeTax * 0.1;
    orderTotal = beforeTax + estimatedTax;
  });
  html += ` <div class="payment-summary-title">Order Summary</div>
          <div class="payment-summary-row">
            <div>Items (${quantity}):</div>
            <div class="payment-summary-money">$${orderPrice.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${shippingHandling.toFixed(
              2
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${beforeTax.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${estimatedTax.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${orderTotal.toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;
  document.querySelector(".payment-summary").innerHTML = html;
}
