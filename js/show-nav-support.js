// TOGGLE PRIMARY NAVI

const primary_menu = document.querySelector(".primary-list");
const primary_menu_li = document.querySelector(".primary-list > li");

// setPrimary_li_height();

document
  .querySelector(".primary-list-hover")
  .addEventListener("click", function (element) {
    if (element.target.classList.contains("primary-list-hover")) {
      hidePrimaryFx();
    }
  });

[...primary_menu.children].forEach((primary_menu_li) => {
  primary_menu_li.addEventListener("click", function (element) {
    setPrimary_li_height();

    primary_menu.style.height = `302px`;
    if (element.currentTarget.getElementsByTagName("ul").length) {
      const target_secondary_list =
        element.currentTarget.querySelector(".secondary-ul");

      target_secondary_list.classList.toggle("show-secondary-list");

      if (window.innerWidth <= 414) {
        const primary_list_height = primary_menu.getBoundingClientRect().height;
        const primary_list_li_height =
          target_secondary_list.parentElement.getBoundingClientRect().height;
        const secondary_list_height =
          target_secondary_list.children.length * 31 - 16;
        if (target_secondary_list.classList.contains("show-secondary-list")) {
          primary_menu.style.height = `${
            primary_list_height + secondary_list_height
          }px`;
          target_secondary_list.parentElement.style.height = `${
            primary_list_li_height + secondary_list_height
          }px`;
        } else {
          target_secondary_list.parentElement.style.height = `60px`;
        }
      }
    }
    hideSecondaryFx(element.currentTarget);
  });
});

function hideSecondaryFx(e) {
  document.querySelectorAll(".secondary-ul").forEach((secondary_ul) => {
    if (secondary_ul !== e.querySelector(".secondary-ul")) {
      secondary_ul.classList.remove("show-secondary-list");
      secondary_ul.parentElement.classList.remove("expand-primary-li");
    }
  });
}

function setPrimary_li_height() {
  [...primary_menu.children].forEach((menu_li) => {
    menu_li.style.height = "60px";
  });
}

function hidePrimaryFx() {
  primary_menu.classList.toggle("show-primary-list");
  hideSecondaryFx(document.querySelector(".primary-list a"));
}

// TOGGLE SUPPORT WINDOW

document
  .querySelector(".support-btn")
  .addEventListener("click", function (element) {
    support_window.classList.toggle("show-support-window");
  });
