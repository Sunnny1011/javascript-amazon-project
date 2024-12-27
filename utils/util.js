export function calculatePrice(cartMatchingItem) {
  return Number((Math.round(cartMatchingItem.priceCents) / 100).toFixed(2));
}
export default calculatePrice;
