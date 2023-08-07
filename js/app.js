"use strict";

/* companies page */

$(".companies__slider__tag-container__tags").slick({
  infinite: false,
  arrows: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: `<button class="companies__slider__next-button">
  <img src="./assets/images/arrow-right.svg" alt="">
</button>`,
  nextArrow: `<button class="companies__slider__prev-button">
  <img src="./assets/images/arrow-right.svg" alt="">
</button>`,
});

// Add click event listener to each tag
const tags = document.querySelectorAll(".tag");
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    // Remove active class from all tags
    tags.forEach((tag) => tag.classList.remove("active"));

    // Add active class to the clicked tag
    tag.classList.add("active");

    // Display the corresponding section based on the clicked tag
    const sectionId = tag.dataset.sectionId;
    const sections = document.querySelectorAll(".company-details");
    sections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
  });
});

/* companies page */
