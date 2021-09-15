import faker from "faker";

const mount = (el) => {
  let product = "";

  for (let i = 0; i < 10; i++) {
    product += `<div>${faker.commerce.productName()}</div>`;
  }
  el.innerHTML = product;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

export { mount };
