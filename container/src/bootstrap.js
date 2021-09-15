import { mount as productMount } from "products/ProductIndex";
import { mount as cartMount } from "cart/CartIndex";

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
