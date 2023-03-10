import { getElement } from "../util-fx.js";

const html_body = getElement("body");

const sidebar_right_toggle = getElement(".sidebar-right-toggle");
const sidebar_right = getElement(".sidebar-right");

const primary_menu = getElement(".primary-list");

const support_window = getElement(".support-window");

sidebar_right_toggle.addEventListener("click", function (e) {
  primary_menu.classList.remove("show-primary-list");

  if (!sidebar_right.classList.contains("hide-sidebar-right")) {
    html_body.style.setProperty("--sidebar-right-space", "0 0.4rem");
  } else {
    if (window.innerWidth > 890) {
      html_body.style.setProperty("--sidebar-right-space", "0 105px 0 0.4rem");
    } else if (window.innerWidth <= 890 && window.innerWidth > 414) {
      html_body.style.setProperty("--sidebar-right-space", "0 85px 0 0.4rem");
    } else if (window.innerWidth <= 414) {
      html_body.style.setProperty("--sidebar-right-space", "0 70px 0 0.4rem");
    }
  }
  e.currentTarget.classList.toggle("rotate-sidebar-right-toggle");

  sidebar_right.classList.toggle("hide-sidebar-right");

  if (support_window.classList.contains("show-support-window")) {
    rightSupportWindow();
  }
});

const tabMediaQuery = "(max-width: 890px)";
const mobMediaQuery = "(max-width: 414px)";
const tabMediaQueryMatch = window.matchMedia(tabMediaQuery);
const mobMediaQueryMatch = window.matchMedia(mobMediaQuery);

tabMediaQueryMatch.addEventListener("change", (tab_event) => {
  if (tab_event.matches) {
    sidebar_right_toggle.classList.add("rotate-sidebar-right-toggle");
    sidebar_right.classList.add("hide-sidebar-right");
    html_body.style.setProperty("--sidebar-right-space", "0 0.4rem");

    getElement(".primary-list").classList.remove("show-primary-list");
  } else {
    sidebar_right_toggle.classList.remove("rotate-sidebar-right-toggle");
    sidebar_right.classList.remove("hide-sidebar-right");
    html_body.style.setProperty("--sidebar-right-space", "0 105px 0 0.4rem");
  }
  rightSupportWindow();
});

mobMediaQueryMatch.addEventListener("change", (mob_event) => {
  if (mob_event.matches) {
    if (!sidebar_right.classList.contains("hide-sidebar-right")) {
      html_body.style.setProperty("--sidebar-right-space", "0 70px 0 0.4rem");
    }
  } else {
    if (!sidebar_right.classList.contains("hide-sidebar-right")) {
      html_body.style.setProperty("--sidebar-right-space", "0 85px 0 0.4rem");
    }
  }
  rightSupportWindow();
});

const rightSupportWindow = () => {
  if (sidebar_right.classList.contains("hide-sidebar-right")) {
    support_window.style.setProperty("--support-window-pos-right", "1rem");
    if (!support_window.classList.contains("show-support-window")) {
      rightVisibleSupportWWindow();
    }
  } else {
    rightVisibleSupportWWindow();
  }
};

const rightVisibleSupportWWindow = () => {
  if (window.innerWidth > 890) {
    support_window.style.setProperty("--support-window-pos-right", "7rem");
  } else if (window.innerWidth <= 890 && window.innerWidth > 414) {
    support_window.style.setProperty("--support-window-pos-right", "5.5rem");
  } else if (window.innerWidth <= 414) {
    support_window.style.setProperty("--support-window-pos-right", "4.5rem");
  }
};
