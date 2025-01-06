import { renderOrderSummaryHTML } from "../../js/order-summary.js";
import { cartClass } from "../../js/cart-class.js";
import { loadProductFetch } from "../../data/products.js";

describe("test the order summary page", () => {
  beforeAll((done) => {
    document.querySelector(".js-test-container").innerHTML =
      "<div class='order-summary'></div><div class='payment-summary'></div><div class='return-to-home-link'></div>";
    loadProductFetch().then(() => {
      spyOn(localStorage, "getItem");
      spyOn(localStorage, "setItem");
      cartClass.cartQuantity = 4;
      cartClass.cartItems = [
        {
          productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          quantity: 1,
          deliveryOptionId: 1,
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 3,
          deliveryOptionId: 2,
        },
      ];
      renderOrderSummaryHTML();
      done();
    });
  });

  it("display the cart", () => {
    console.log(cartClass.cartItems);
    expect(document.querySelectorAll(".cart-item-container").length).toEqual(2);
  });
  it("display the correct product name", () => {
    expect(document.querySelector(".product-name").innerText).toContain(
      "Adults Plain Cotton T-Shirt - 2 Pack"
    );
  });
  it("display the correct product price", () => {
    expect(document.querySelectorAll(".product-price")[0].innerText).toContain(
      "$7.99"
    );
    expect(document.querySelectorAll(".product-price")[1].innerText).toContain(
      "$20.95"
    );
    expect(cartClass.cartItems[0].quantity).toEqual(1);
  });
  // afterEach(() => {
  //   document.querySelector(".js-test-container").innerHTML = "";
  // });
});
