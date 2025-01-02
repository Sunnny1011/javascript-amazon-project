import { renderOrderSummaryHTML } from "./order-summary.js";
import { renderPaymentSummaryHTML } from "./payment-summary.js";
import { loadProducts } from "../data/products.js";
import "./cart-class.js";
//import "../data/backend-practice.js";
loadProducts(() => {
  // this
  renderOrderSummaryHTML();
  renderPaymentSummaryHTML();
});
