import { cartClass } from "./cart-class.js";
import { products, loadProductFetch } from "../data/products.js";

// loadProducts(loadHomepage);
loadProductFetch().then(() => {
  loadHomepage();
});
function loadHomepage() {
  let html = "";
  products.forEach((item) => {
    html += `<div class="product-container">
                <div class="product-image-container">
                  <img
                    class="product-image"
                    src="${item.image}"
                  />
                </div>
      
                <div class="product-name limit-text-to-2-lines">
                  ${item.name}
                </div>
      
                <div class="product-rating-container">
                  <img
                    class="product-rating-stars"
                    src=${item.getImageUrl()}
                  />
                  <div class="product-rating-count link-primary">${
                    item.rating.count
                  }</div>
                </div>
      
                <div class="product-price">$${item.getProductPrice()}</div>
      
                <div class="product-quantity-container">
                  <select class="data-select-id-${item.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  
                </div>
                ${item.extraInfoHtml()}
      
                <div class="product-spacer"></div>
      
                <div class="added-to-cart added-to-cart-${item.id}">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>
      
                <button class="add-to-cart-button button-primary" data-product-id =${
                  item.id
                }>Add to Cart</button>
              </div>`;
  });

  document.querySelector(".products-grid").innerHTML = html;
  document.querySelector(".cart-quantity").innerHTML = cartClass.cartQuantity;

  const addedMessageTimeouts = {};
  function addAddClass(productId) {
    const previousTimeoutId = addedMessageTimeouts[productId];
    console.log(addedMessageTimeouts);
    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
      delete addedMessageTimeouts[`${previousTimeoutId}`];
    }
  }
  document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      const { productId } = button.dataset;

      const selectedEle = document.querySelector(`.added-to-cart-${productId}`);
      selectedEle.classList.add("added-to-cart-come-on");
      addAddClass(productId);
      addedMessageTimeouts[`${productId}`] = productId;
      setTimeout(() => {
        selectedEle.classList.remove("added-to-cart-come-on");
      }, "2000");

      cartClass.addToCart(productId);
    });
  });
}
