const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("preview");
const containerImage = document.querySelector(".container");

let x = 0;
let time;

console.log(containerImage);
prevBtn.addEventListener("click", () => {
  x += 45;
  clearTimeout(time);
  updateGallery();
});
nextBtn.addEventListener("click", () => {
  x -= 45;
  clearTimeout(time);
  updateGallery();
});

const updateGallery = () => {
  containerImage.style.transform = ` perspective(1000px)  rotateY(${x}deg)`;
  time = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
};
updateGallery();
