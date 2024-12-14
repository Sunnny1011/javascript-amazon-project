export let cart = JSON.parse(localStorage.getItem("cart")) || [];
export let cartQuantity = JSON.parse(
  localStorage.getItem("cart-quantity") || 0
);

export function saveToStorage() {
  let addTotalQuantity = 0;
  cart.forEach((cartItem) => {
    addTotalQuantity += cartItem.quantity;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cart-quantity", addTotalQuantity);
  return addTotalQuantity;
}
export function addToCart(productId) {
  let matchingItem;
  let quantity = 0;
  const selectEle = document.querySelector(`.data-select-id-${productId}`);
  quantity = Number(selectEle.value);
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: 1,
    });
  }

  document.querySelector(".cart-quantity").innerHTML = saveToStorage();
}
export function removeFromCart(deletelinkId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== deletelinkId.deleteLink) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  console.log(cart);
  saveToStorage();
}

export function updateCart(updatelinkId) {
  const newCart = [];
  let quantity = 0;
  const selectEle = document.querySelector(`.data-select-id-${productId}`);
  quantity = Number(selectEle.value);
  cart.forEach((cartItem) => {
    if (cartItem.productId === updatelinkId.updatelink) {
      cartItem.quantity += quantity;
    }
  });
  newCart.push(cartItem);
  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = Number(deliveryOptionId);
  saveToStorage();
}
