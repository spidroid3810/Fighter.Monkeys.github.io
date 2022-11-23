var slideIndex = 0;
 showSlides();
 
 function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";  
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}    
 for (i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " active";
 setTimeout(showSlides, 3000); // Change image every 2 seconds
 }
 
 
 let currentSection = 0;
 let sections = document.querySelectorAll(".section");
 let sectionButtons = document.querySelectorAll(".nav > li");
 let nextButton = document.querySelector(".next");
 let previousButton = document.querySelector(".previous");
 for (let i = 0; i < sectionButtons.length; i++) {
 sectionButtons[i].addEventListener("click", function() {
 sections[currentSection].classList.remove("active");
 sectionButtons[currentSection].classList.remove("active");
 sections[currentSection = i].classList.add("active");
 sectionButtons[currentSection].classList.add("active");
 if (i === 0) {
 if (previousButton.className.split(" ").indexOf("disable") < 0) {
 previousButton.classList.add("disable");
 }
 } else {
 if (previousButton.className.split(" ").indexOf("disable") >= 0) {
 previousButton.classList.remove("disable");
 }
 }
 if (i === sectionButtons.length - 1) {
 if (nextButton.className.split(" ").indexOf("disable") < 0) {
 nextButton.classList.add("disable");
 }
 } else {
 if (nextButton.className.split(" ").indexOf("disable") >= 0) {
 nextButton.classList.remove("disable");
 }
 }
 });
 }
 
 nextButton.addEventListener("click", function() {
 if (currentSection < sectionButtons.length - 1) {
 sectionButtons[currentSection + 1].click();
 }
 });
 
 previousButton.addEventListener("click", function() {
 if (currentSection > 0) {
 sectionButtons[currentSection - 1].click();
 }
 });
 
 
 var swiper = new Swiper(".slide-content", {
 slidesPerView: 3,
 spaceBetween: 25,
 autoplay: true,
 centerSlide: 'true',
 fade: 'true',
 grabCursor: 'true',
 pagination: {
 el: ".swiper-pagination",
 clickable: true,
 dynamicBullets: true,
 
 },
 navigation: {
 nextEl: ".swiper-button-next",
 prevEl: ".swiper-button-prev",
 },
 
 breakpoints:{
 0: {
 slidesPerView: 1,
 },
 520: {
 slidesPerView: 2,
 },
 950: {
 slidesPerView: 3,
 },
 },
 });