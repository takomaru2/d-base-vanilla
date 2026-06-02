// ====================> アコーディオンメニュー <====================

const answerAll = document.querySelectorAll(".answer-wrapper");
const questions = document.querySelectorAll(".question-wrapper");
const plusAll = document.querySelectorAll(".question-img");
const minusAll = document.querySelectorAll(".minus-icon-img");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answerAll[index].classList.toggle("open");
    plusAll[index].classList.toggle("none");
    minusAll[index].classList.toggle("go");
  });
});

// ====================> ハンバーガーメニュー <====================

// メニューボタン押した時
const navMenuSp = document.querySelector(".header-menu-sp");
const navListSp = document.querySelector(".nav-list-sp");
navMenuSp.addEventListener("click", () => {
  navListSp.classList.add("open");
});

// Logoを押した時
const logo = document.querySelector(".nav-list-sp > .logo");
logo.addEventListener("click", () => {
  navListSp.classList.remove("open");
  console.log("ロゴ！！！");
});

// xボタン押した時
const closeButton = document.querySelector(".nav-list-sp > .close-button");
closeButton.addEventListener("click", () => {
  navListSp.classList.remove("open");
  console.log("ボタン機");
});

// メニューの何かしらを押した時
const navMenus = document.querySelectorAll(".nav-list-sp li");
navMenus.forEach((navMenu) => {
  navMenu.addEventListener("click", () => {
    navListSp.classList.remove("open");
    console.log("メニューたち");
  });
});
