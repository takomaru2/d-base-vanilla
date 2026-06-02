// ==========================================
// 質問取得  // 回答取得
const answer = document.querySelector(".answer-wrapper");
const question = document.querySelector(".question-wrapper");
const plus = document.querySelector(".question-img");
const minus = document.querySelector(".minus-icon-img");

const answerAll = document.querySelectorAll(".answer-wrapper");
const questions = document.querySelectorAll(".question-wrapper");
const plusAll = document.querySelectorAll(".question-img");
const minusuAll = document.querySelectorAll(".minus-icon-img");

// 一個のパターン
// question.addEventListener("click", () => {
//   // answer.classList.toggle("open");
//
//   //   ========all
//
//   //   画像も変更したい
//   plus.classList.toggle("none");
//   minus.classList.toggle("go");
// });

// questions.forEach((question, index) => {
//   question.addEventListener("click", () => {
//     answerAll[index].classList.toggle("open");
//   });
// });

// querySelectorAllは配列みたいなの取れてるmapとかが使えるのではないか
questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answerAll[index].classList.toggle("open");
    plusAll[index].classList.toggle("none");
    minusuAll[index].classList.toggle("go");
  });
});

// 何個も何個も作るの大変だよ
// question2.addEventListener("click", () => {
//   answer2.classList.toggle("open");
// });

// ======================ハンバーガー======>>>>>=====>>>>>>>>>>>>>>>>>>>>==========================>

// header-menu-spをnav-list-sp

const navMenuSp = document.querySelector(".header-menu-sp");
const navListSp = document.querySelector(".nav-list-sp");
const closeButton = document.querySelector(".close-button");

navMenuSp.addEventListener("click", () => {
  navListSp.classList.add("open");
  console.log("おされた！！！");
});

closeButton.addEventListener("click", () => {
  navListSp.classList.remove("open");
  console.log("消された！！！");
});
