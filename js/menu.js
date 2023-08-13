let menu = document.querySelector(".nav__burger-menu");
let navList = document.querySelector(".side-menu");
let closeSideMenu = document.querySelector(".side-menu__close");

menu.onclick = () => {
  navList.classList.toggle("active");
};

closeSideMenu.onclick = () => {
  navList.classList.remove("active");
};

// Get all the side menu items
const sideMenuItems = document.querySelectorAll(".side-menu__list__item");

// Add click event listeners to each side menu item
sideMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle the active class for the clicked side menu item
    item.classList.toggle("active");

    // Get the sub-menu element within the clicked side menu item
    const subMenu = item.querySelector(".sub-menu");

    // Check if the sub-menu exists
    if (subMenu) {
      // Toggle the active class for the sub-menu
      subMenu.classList.toggle("active");
    }
  });
});
