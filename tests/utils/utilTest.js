import { calculatePrice } from "../../utils/util.js";
// export function calculatePrice(cartMatchingItem) {
//   let calculateResult;

//   calculateResult = Number((cartMatchingItem.priceCents / 100).toFixed(2));
//   return calculateResult;
// }
// export default calculatePrice;
describe("Test the calculate price", () => {
  it("should return the result for gaven price", () => {
    const cartMatchingItem = { priceCents: 2000.4 };
    expect(calculatePrice(cartMatchingItem)).toEqual("20.00");
  });
  it("should return the result for negative price", () => {
    const cartMatchingItem = { priceCents: -2005.5 };
    expect(calculatePrice(cartMatchingItem)).toEqual("-20.05");
  });
});
