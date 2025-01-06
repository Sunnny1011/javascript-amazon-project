import { renderOrderSummaryHTML } from "./order-summary.js";
import { renderPaymentSummaryHTML } from "./payment-summary.js";
import { loadProductFetch } from "../data/products.js";
import "./cart-class.js";
//import "../data/backend-practice.js";
// loadProducts(() => {
//   renderOrderSummaryHTML();
//   renderPaymentSummaryHTML();
// });
loadProductFetch().then(() => {
  renderOrderSummaryHTML();
  renderPaymentSummaryHTML();
});
