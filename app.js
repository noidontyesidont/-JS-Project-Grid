import {
  uni_logo_url,
  event_json_url,
  products_json_url,
} from "./js/util-var.js";

import { createLocalStorage, hidePreLoader } from "./js/util-fx.js";

import {
  HTMLUniLogos,
  CSSAffiliatedUniTransX,
  LoadAffiliatedUniversities,
} from "./js/header-load-affil-uni.js";

import { LoadBrands } from "./js/header-load-products.js";

import { LoadMainEvents, LoadEventDates } from "./js/header-load-events.js";

import { setFooterYear } from "./js//util/util-footer.js";

window.addEventListener("DOMContentLoaded", async (element) => {
  try {
    createLocalStorage();
    setFooterYear();

    await LoadAffiliatedUniversities(uni_logo_url);
    await LoadBrands(products_json_url);
    await LoadMainEvents(event_json_url);
    await LoadEventDates(event_json_url);
  } catch (error) {
    throw new Error(error);
  }
});

window.addEventListener("load", (element) => {
  try {
    hidePreLoader();
  } catch (err) {
    throw new Error(err);
  }
});

window.addEventListener("resize", (element) => {
  try {
    CSSAffiliatedUniTransX();
  } catch (error) {
    throw new Error(error);
  }
});
