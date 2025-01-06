import { calculatePrice } from "../utils/util.js";
export class Products {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
    this.keywords = productDetails.keywords;
  }

  getImageUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getProductPrice() {
    return `${calculatePrice(this.priceCents)}`;
  }
  extraInfoHtml() {
    return ``;
  }
}
export class Clothing extends Products {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHtml() {
    return `<a href="${this.sizeChartLink}" target="_blank">Size Link</a>`;
  }
}
export class Appliance extends Products {
  instructionsLink;
  warrantyLink;
  constructor(productDetails) {
    super(productDetails);
    this.instructionsLink = "../images/appliance-instructions.png";
    this.warrantyLink = "../images/appliance-warranty.png";
  }
  extraInfoHtml() {
    return `<a href="${this.instructionsLink}" target="_blank">Instructions</a><a href="${this.warrantyLink}" target="_blank">Warranty</a>`;
  }
}
export let products = [];

export function loadProductFetch() {
  const promise1 = fetch("https://supersimplebackend.dev/products")
    .then((response) => {
      return response.json();
    })
    .then((productData) => {
      products = productData.map((productDetails) => {
        if (productDetails.type === "clothing") {
          return new Clothing(productDetails);
        }
        if (productDetails.keywords) {
          const hasAppliances = productDetails.keywords.includes("appliances");

          if (hasAppliances) {
            return new Appliance(productDetails);
          }
        }
        return new Products(productDetails);
      });
    });
  return promise1;
}

// export function loadProducts(paraFun) {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", () => {
//     products = JSON.parse(xhr.response).map((productDetails) => {
//       if (productDetails.type === "clothing") {
//         return new Clothing(productDetails);
//       }
//       if (productDetails.keywords) {
//         const hasAppliances = productDetails.keywords.includes("appliances");

//         if (hasAppliances) {
//           return new Appliance(productDetails);
//         }
//       }
//       return new Products(productDetails);
//     });
//     paraFun();
//   });

//   xhr.open("GET", "https://supersimplebackend.dev/products");
//   xhr.send();
// }

// const obj1 = {
//   id: 1,
//   test1() {
//     console.log(this);
//   },
// };
// obj1.test1();

// // const obj2 = {
// //   a: 1,
// //   b: this.a,
// // };
// // console.log(obj2);

// function obj3() {
//   console.log(this);
// }

// obj3.call("hello");

// const obj4 = {
//   method: () => {
//     console.log(this);
//   },
// };
// obj4.method.call("test");
