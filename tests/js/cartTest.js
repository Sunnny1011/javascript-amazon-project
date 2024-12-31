// import {
//   loadFromStorage,
//   cart,
//   saveToStorage,
//   addToCart,
//   removeFromCart,
//   updateDeliveryOption,
// } from "../../js/cart.js";
// import { renderOrderSummaryHTML } from "../../js/order-summary.js";
// describe("test cart js", () => {
//   beforeEach(() => {
//     spyOn(localStorage, "setItem");
//   });
//   // it("test localStorage setItem function", () => {
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([
//   //       {
//   //         productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //     ]);
//   //   });
//   //   loadFromStorage();
//   //   saveToStorage();
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
//   // it("test exsisting product", () => {
//   //   document.querySelector(".js-test-container").innerHTML =
//   //     "<div class='cart-quantity'></div>";
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([
//   //       {
//   //         productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //     ]);
//   //   });
//   //   loadFromStorage();
//   //   addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
//   //   expect(cart.length).toEqual(1);
//   //   expect(cart[0].quantity).toEqual(2);
//   // });
//   // it("test no exsisting product", () => {
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([]);
//   //   });
//   //   loadFromStorage();
//   //   addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
//   //   expect(cart.length).toEqual(1);
//   //   expect(cart[0].quantity).toEqual(1);
//   // });
//   // it("test remove function", () => {
//   //   document.querySelector(".js-test-container").innerHTML =
//   //     "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([
//   //       {
//   //         productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //       {
//   //         productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//   //         quantity: 3,
//   //         deliveryOptionId: 2,
//   //       },
//   //     ]);
//   //   });
//   //   loadFromStorage();
//   //   renderOrderSummaryHTML();
//   //   // document.querySelectorAll(".delete-quantity-link")[0].click();
//   //   removeFromCart({ deleteLink: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6" });
//   //   renderOrderSummaryHTML();
//   //   expect(cart.length).toEqual(1);
//   //   expect(cart[0].quantity).toEqual(3);
//   //   expect(localStorage.setItem).toHaveBeenCalledTimes(2);
//   //   expect(localStorage.setItem).toHaveBeenCalledWith(
//   //     "cart",
//   //     '[{"productId":"15b6fc6f-327a-4ec4-896f-486349e85a3d","quantity":3,"deliveryOptionId":2}]'
//   //   );
//   // });
//   // it("test update delivery option function", () => {
//   //   document.querySelector(".js-test-container").innerHTML =
//   //     "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([
//   //       {
//   //         productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //       {
//   //         productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//   //         quantity: 3,
//   //         deliveryOptionId: 2,
//   //       },
//   //     ]);
//   //   });
//   //   loadFromStorage();
//   //   renderOrderSummaryHTML();
//   //   document
//   //     .querySelector(".delivery-option-e43638ce-6aa0-4b85-b27f-e1d07eb678c6-3")
//   //     .querySelector("input")
//   //     .click();
//   //   expect(
//   //     document.querySelector(
//   //       ".delivery-option-input-button-e43638ce-6aa0-4b85-b27f-e1d07eb678c6-3"
//   //     ).checked
//   //   ).toEqual(true);
//   //   expect(cart.length).toEqual(2);
//   //   expect(cart[0].deliveryOptionId).toEqual(3);
//   // });
//   // it("test true update delivery option function", () => {
//   //   document.querySelector(".js-test-container").innerHTML =
//   //     "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([
//   //       {
//   //         productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //       {
//   //         productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//   //         quantity: 3,
//   //         deliveryOptionId: 2,
//   //       },
//   //     ]);
//   //   });
//   //   loadFromStorage();
//   //   renderOrderSummaryHTML();
//   //   updateDeliveryOption("15b6fc6f-327a-4ec4-896f-486349e85a3d", "3");
//   //   renderOrderSummaryHTML();
//   //   expect(
//   //     document.querySelector(
//   //       ".delivery-option-input-button-15b6fc6f-327a-4ec4-896f-486349e85a3d-3"
//   //     ).checked
//   //   ).toEqual(true);
//   //   expect(cart.length).toEqual(2);
//   //   expect(cart[1].deliveryOptionId).toEqual(3);
//   // });
//   // it("test true update delivery option function", () => {
//   //   document.querySelector(".js-test-container").innerHTML =
//   //     "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
//   //   spyOn(localStorage, "getItem").and.callFake(() => {
//   //     return JSON.stringify([
//   //       {
//   //         productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//   //         quantity: 1,
//   //         deliveryOptionId: 1,
//   //       },
//   //       {
//   //         productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//   //         quantity: 3,
//   //         deliveryOptionId: 2,
//   //       },
//   //     ]);
//   //   });
//   //   loadFromStorage();
//   //   renderOrderSummaryHTML();
//   //   updateDeliveryOption("1", "3");
//   //   renderOrderSummaryHTML();

//   //   expect(cart.length).toEqual(2);
//   //   expect(cart[1].deliveryOptionId).toEqual(2);
//   //   expect(localStorage.setItem).toHaveBeenCalledTimes(0);
//   // });
//   it("test true update delivery option function", () => {
//     document.querySelector(".js-test-container").innerHTML =
//       "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
//     spyOn(localStorage, "getItem").and.callFake(() => {
//       return JSON.stringify([
//         {
//           productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//           quantity: 1,
//           deliveryOptionId: 1,
//         },
//         {
//           productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//           quantity: 3,
//           deliveryOptionId: 2,
//         },
//       ]);
//     });
//     loadFromStorage();
//     renderOrderSummaryHTML();
//     updateDeliveryOption("15b6fc6f-327a-4ec4-896f-486349e85a3d", "4");
//     renderOrderSummaryHTML();

//     expect(cart.length).toEqual(2);
//     expect(cart[1].deliveryOptionId).toEqual(2);
//     expect(localStorage.setItem).toHaveBeenCalledTimes(0);
//   });
//   afterEach(() => {
//     document.querySelector(".js-test-container").innerHTML = "";
//   });
// });
