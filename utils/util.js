export function calculatePrice(cartMatchingItem) {
  let calculateResult;

  calculateResult = Number((cartMatchingItem.priceCents / 100).toFixed(2));
  return calculateResult;
}
export default calculatePrice;
