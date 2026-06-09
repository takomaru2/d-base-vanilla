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

const navMenuSp = document.querySelector(".header-menu-sp");
const navListSp = document.querySelector(".mobile-menu");
const logo = document.querySelector(".mobile-menu > .logo");
const closeButton = document.querySelector(".mobile-menu > .close-button");
const navMenus = document.querySelectorAll(".mobile-menu li");

if (!navMenuSp || !navListSp || !logo || !closeButton) {
  throw new Error("要素が存在しません！！");
}

// メニューボタン押した時
navMenuSp.addEventListener("click", () => {
  navListSp.classList.add("open");
});

// Logoを押した時

logo.addEventListener("click", () => {
  navListSp.classList.remove("open");
});

// xボタン押した時

closeButton.addEventListener("click", () => {
  navListSp.classList.remove("open");
});

// メニューの何かしらを押した時
navMenus.forEach((navMenu) => {
  navMenu.addEventListener("click", () => {
    navListSp.classList.remove("open");
  });
});
