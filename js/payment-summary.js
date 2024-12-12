import { products } from "../data/products.js";
import { cart } from "./cart.js";
import { calculatePrice } from "../utils/util.js";

export function renderPaymentSummaryHTML(deliveryPrice) {
  let html = "";
  let cartMatchingItem;
  let orderPrice = 0;
  let shippingHandling = 0;
  let beforeTax = ``;
  let estimatedTax = ``;
  let orderTotal = ``;
  let quantity = 0;
  cart.forEach((cartItem) => {
    products.forEach((productItem) => {
      if (productItem.id === cartItem.productId) {
        cartMatchingItem = productItem;

        quantity += cartItem.quantity;
        orderPrice += Number(
          calculatePrice(cartMatchingItem) * cartItem.quantity
        );
        if (deliveryPrice) {
          shippingHandling += Number(deliveryPrice.deliveryPrice);
        }
      }
    });
  });
  html += ` <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${quantity}):</div>
            <div class="payment-summary-money">$${orderPrice}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${shippingHandling}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${beforeTax}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${estimatedTax}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${orderTotal}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;
  document.querySelector(".payment-summary").innerHTML = html;
}
