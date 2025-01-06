// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load", () => {
//   console.log(xhr.response);
// });
// xhr.open("GET", "https://supersimplebackend.dev");
// xhr.send();
function fetchPractice() {
  fetch("https://supersimplebackend.dev")
    .then((response) => {
      return response.text();
    })
    .then((devData) => {
      console.log(devData);
    });
}
fetchPractice();
