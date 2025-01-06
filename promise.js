const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", async (event) => {
  console.log("click btn1");

  const respPromise = fetch("https://supersimplebackend.dev/products");

  // respPromise
  // respPromise.then((resp) => {});
  const resp = await fetch("https://supersimplebackend.dev/products");

  // (await respPromise).json();

  // .then((res) => {
  //   return res.json();
  // })
  // .then((json) => {
  //   console.log(json);
  // });

  const json = await resp.json();

  console.log(json);

  console.log("end fetch");
});

async function click(event) {
  console.log(event);
  // wait 1
  console.log("start btn2");

  // const id = setTimeout(() => {
  //   console.log("2 secs");
  // }, 1000);

  // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(1111);
  //   }, 2000);
  // });

  const result = await delay(2000);

  // const value = await promise1;

  console.log("end btn2", result);
}

function delay(ms) {
  const p1 = new Promise((resolve, rejct) => {
    setTimeout(() => {
      resolve("xx");
    }, ms);
  });

  return p1;
}

// click(event)

btn2.addEventListener("click", click);

// function testAsync() {
//   // p1 =
//   return new Promise((resolve) => {
//     resolve({
//       status: 200,
//     });
//   });
// }

// asyn function testAsync2() {
//   return {
//     status: 200,
//   };
// }

//  testAsync2()

// testAsync().then((value) => {
//   console.log(value);
// });

// const value = await testAsync();
// console.log(value);
