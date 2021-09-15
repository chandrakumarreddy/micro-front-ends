import faker from "faker";

const mount = (el) => {
  const cart = `Your cart items count ${faker.datatype.number()}`;
  el.innerHTML = cart;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
