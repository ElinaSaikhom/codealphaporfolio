const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const lightboxButtons = document.querySelector(".lightbox-buttons");

let currentIndex = 0;

function showImage(index){
  currentIndex = index;
  const imgSrc = images[currentIndex].src;
  lightboxImg.src = imgSrc;
  lightboxImg.onload = () => {
    lightbox.style.display = "flex";
  };
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index)
  });
});


closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxButtons.style.display ="none"
});


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});


prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});


