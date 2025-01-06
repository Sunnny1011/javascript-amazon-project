// import { cartClass } from "../../js/cart-class.js";
// import { renderOrderSummaryHTML } from "../../js/order-summary.js";
// import { loadProducts } from "../../data/products.js";
// describe("test cart js", () => {
//   // beforeAll(() => {

//   // });
//   beforeEach(() => {
//     spyOn(localStorage, "getItem");
//     spyOn(localStorage, "setItem");
//     document.querySelector(".js-test-container").innerHTML =
//       "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div><div class='cart-quantity'></div>";
//     loadProducts(() => {
//       renderOrderSummaryHTML();
//       renderOrderSummaryHTML();
//     });
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
//   // it("test localStorage setItem function", () => {
//   //   expect(cart.length).toEqual(1);
//   //   expect(cart[0].quantity).toEqual(1);
//   //   expect(localStorage.setItem).toHaveBeenCalledTimes(2);
//   //   expect(localStorage.setItem).toHaveBeenCalledWith(
//   //     "cart",
//   //     JSON.stringify([
//   //       {
//   //         productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //     ])
//   //   );
//   // });
//   it("test exsisting product", () => {
//     cartClass.addToCart("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
//     expect(cartClass.cartItems.length).toEqual(2);
//     expect(cartClass.cartItems[0].quantity).toEqual(2);
//   });
//   it("test no exsisting product", () => {
//     cartClass.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
//     expect(cartClass.cartItems.length).toEqual(3);
//     expect(cartClass.cartItems[0].quantity).toEqual(1);
//   });
//   it("test remove function", () => {
//     // document.querySelectorAll(".delete-quantity-link")[0].click();
//     cartClass.removeFromCart({
//       deleteLink: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//     });
//     expect(cartClass.cartItems.length).toEqual(1);
//     expect(cartClass.cartItems[0].quantity).toEqual(3);
//     expect(localStorage.setItem).toHaveBeenCalledTimes(2);
//     expect(localStorage.setItem).toHaveBeenCalledWith(
//       "cart-class",
//       '[{"productId":"15b6fc6f-327a-4ec4-896f-486349e85a3d","quantity":3,"deliveryOptionId":2}]'
//     );
//   });
//   it("test update delivery option function", () => {
//     document
//       .querySelector(".delivery-option-83d4ca15-0f35-48f5-b7a3-1ea210004f2e-3")
//       .querySelector("input")
//       .click();
//     expect(
//       document.querySelector(
//         ".delivery-option-input-button-83d4ca15-0f35-48f5-b7a3-1ea210004f2e-3"
//       ).checked
//     ).toEqual(true);
//     expect(cartClass.cartItems.length).toEqual(2);
//     expect(cartClass.cartItems[0].deliveryOptionId).toEqual(3);
//   });
//   it("test true update delivery option function", () => {
//     cartClass.updateDeliveryOption("15b6fc6f-327a-4ec4-896f-486349e85a3d", "3");

//     expect(
//       document.querySelector(
//         ".delivery-option-input-button-15b6fc6f-327a-4ec4-896f-486349e85a3d-3"
//       ).checked
//     ).toEqual(true);
//     expect(cartClass.cartItems.length).toEqual(2);
//     expect(cartClass.cartItems[1].deliveryOptionId).toEqual(3);
//   });
//   it("test true update delivery option function-2", () => {
//     cartClass.updateDeliveryOption("1", "3");

//     expect(cartClass.cartItems.length).toEqual(2);
//     expect(cartClass.cartItems[1].deliveryOptionId).toEqual(2);
//   });
//   it("test true update delivery option function-3", () => {
//     expect(cartClass.cartItems.length).toEqual(2);
//     expect(cartClass.cartItems[1].deliveryOptionId).toEqual(2);
//   });
// });
// // afterAll(() => {
// //   document.querySelector(".js-test-container").innerHTML = "";
// // });
