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

/* home page */

$(document).ready(function () {
  $(".home-class").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
  });
});

$(document).ready(function () {
  function initializeSlider(selector, slidesToShow, infinite, arrowsClases) {
    $(selector).slick({
      dots: false,
      infinite: infinite,
      arrows: true,
      slidesToShow: slidesToShow,
      prevArrow: `<button class="${arrowsClases}__next-button">
<img src="./assets/images/arrow-right-blue.svg" alt="">
</button>`,
      nextArrow: `<button class="${arrowsClases}__prev-button">
<img src="./assets/images/arrow-right-blue.svg" alt="">
</button>`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 929,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    });
  }

  initializeSlider(".instructors__slider", 4, true, "instructors");
  initializeSlider(".testimonials__slider", 3, true, "testimonials");
  initializeSlider(".categories__slider", 4, false, "categories");
});

const courses = document.querySelectorAll(".course__tab");
courses.forEach((course) => {
  course.addEventListener("click", () => {
    // Remove active class from all courses
    courses.forEach((course) => course.classList.remove("active"));

    // Add active class to the clicked course
    course.classList.add("active");

    // Display the corresponding section based on the clicked course
    const sectionId = course.dataset.sectionId;
    const sections = document.querySelectorAll(".course-card");
    sections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
  });
});
