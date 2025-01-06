import { Products } from "../../data/products.js";
describe("test classes", () => {
  let product;
  beforeEach(() => {
    product = new Products({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56,
      },
      priceCents: 799,
      keywords: ["tshirts", "apparel", "mens"],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png",
    });
  });
  it("test product class", () => {
    expect(product.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
  });
});
