export let cart = [
  { productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", quantity: 2 },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];
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
    });
  }
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
}
