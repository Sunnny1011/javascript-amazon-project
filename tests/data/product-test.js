import { calculatePrice } from "../../utils/util.js";
import {
  Products,
  Clothing,
  Appliance,
  loadProducts,
} from "../../data/products.js";
describe("test classes", () => {
  it("test product class", () => {
    loadProducts(paraFun);
    const class1 = new Products();
    expect(class1).toContain("");
  });
});
