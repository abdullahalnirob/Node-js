let nAme = document.querySelector(".name");
let a = fetch("http://localhost:3000/")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log(a);