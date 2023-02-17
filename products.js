import { products_json_url } from "./js/util-var.js";
import { hidePreLoader } from "./js/util-preloader.js";
import { filterProducts } from "./js/util-products-search.js";
import { HTMLFilterInput } from "./js/util-products-get-filter.js";

window.addEventListener("DOMContentLoaded", async (e) => {
  try {
    await HTMLFilterInput(products_json_url);
    await filterProducts();
  } catch (err) {
    throw new Error(err);
  }
});
window.addEventListener("load", function (e) {
  try {
    hidePreLoader();
  } catch (err) {
    throw new Error(err);
  }
});
