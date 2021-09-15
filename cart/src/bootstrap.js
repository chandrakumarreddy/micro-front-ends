import faker from "faker";

const cart = `Your cart items count ${faker.datatype.number()}`;

document.querySelector("#dev-cart").innerHTML = cart;
