import { calculatePrice } from "../../utils/util.js";
describe("Test the calculate price", () => {
  it("should return the result for gaven price", () => {
    const cartMatchingItem = { priceCents: 2000.4 };
    expect(calculatePrice(cartMatchingItem.priceCents)).toEqual(20.0);
  });
  it("should return the result for negative price", () => {
    const cartMatchingItem = { priceCents: -2005.5 };
    expect(calculatePrice(cartMatchingItem.priceCents)).toEqual(-20.05);
  });
});
