const toogleBtn = document.getElementById("toogleBtn");
const toogleBtnImg = document.getElementById("toogleBtnImg");
const collapse = document.getElementById("collapse");
var isOpen = false;

toogleBtn.addEventListener("click", () => {
  if (!isOpen) {
    toogleBtnImg.style.filter = "invert(1)";
    collapse.style.top = "0vh";
    isOpen = true;
  } else {
    toogleBtnImg.style.filter = "invert(0)";
    collapse.style.top = "-100vh";
    isOpen = false;
  }
});
