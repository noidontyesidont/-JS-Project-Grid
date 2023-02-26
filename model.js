import {
  LoadProductModel,
  tabCheckGalleryMove,
  genCheckGalleryMove,
  genChangeGalleryLimit,
  tabChangeGalleryLimit,
} from "./js/model-util.js";
import { getElement, hidePreLoader, createLocalStorage } from "./js/util-fx.js";
import { setFooterYear } from "./js/util-footer.js";
import { tab_screen } from "./js/util-var.js";

window.addEventListener("DOMContentLoaded", async function () {
  try {
    await LoadProductModel();
    createLocalStorage();
    hidePreLoader();
    setFooterYear();

    if (
      this.window.innerWidth <
      parseInt(
        tab_screen.slice(tab_screen.indexOf(":") + 1, tab_screen.length - 3)
      ) +
        1
    ) {
      tabCheckGalleryMove();
    } else {
      genCheckGalleryMove();
    }
  } catch (err) {
    throw new Error(err);
  }
});

window.matchMedia(tab_screen).addEventListener("change", async (e) => {
  try {
    if (!document.querySelector(".error-message")) {
      if (e.matches) {
        tabChangeGalleryLimit();
      } else {
        genChangeGalleryLimit();
      }
    }
  } catch (err) {
    throw new Error(err);
  }
});
