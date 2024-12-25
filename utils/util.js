export function calculatePrice(cartMatchingItem) {
  return (Math.round(cartMatchingItem.priceCents) / 100).toFixed(2);
}
export default calculatePrice;
