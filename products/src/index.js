import faker from "faker";

let product = "";

for (let i = 0; i < 10; i++) {
  product += `<div>${faker.commerce.productName()}</div>`;
}

document.querySelector("#dev-products").innerHTML = product;
