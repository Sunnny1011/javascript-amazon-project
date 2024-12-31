// import { renderOrderSummaryHTML } from "../../js/order-summary.js";
// import { cartClass } from "../../js/cart-class.js";

// describe("test the order summary page", () => {
//   beforeEach(() => {
//     document.querySelector(".js-test-container").innerHTML =
//       "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
//     spyOn(localStorage, "getItem");
//     spyOn(localStorage, "setItem");
//     cartClass.cartItems = [
//       {
//         productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//         quantity: 1,
//         deliveryOptionId: 1,
//       },
//       {
//         productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//         quantity: 3,
//         deliveryOptionId: 2,
//       },
//     ];
//   });
//   renderOrderSummaryHTML();
// });
// it("display the cart", () => {
//   expect(document.querySelectorAll(".cart-item-container").length).toEqual(2);
// });
// it("display the correct product name", () => {
//   expect(document.querySelector(".product-name").innerText).toContain(
//     "Black and Gray Athletic Cotton Socks - 6 Pairs"
//   );
// });
// it("display the correct product price", () => {
//   expect(document.querySelectorAll(".product-price")[0].innerText).toContain(
//     "$10.9"
//   );
//   expect(document.querySelectorAll(".product-price")[1].innerText).toContain(
//     "$20.95"
//   );
//   expect(cart[0].quantity).toEqual(1);
// });
// afterEach(() => {
//   document.querySelector(".js-test-container").innerHTML = "";
// });
