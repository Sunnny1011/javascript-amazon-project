export function updateDate() {}
export function calculatePrice(cartMatchingItem) {
  return (cartMatchingItem.priceCents / 100).toFixed(2);
}
