// 質問取得  // 回答取得

// クリック検知。質問がクリックされたら

// 回答にopenを付けたり消したりする

//要素取得はdocument.querySelector()
// イベントはaddEventListener()
// クラス操作はclassList
// ===========================================================

// question.addEventListener("click", () => {
//   answer.classList.add("open");
// });

// クリックしたら戻すようにしなきゃ、でもそりゃ分岐しないとクリックした時どっち使うのってなるか
// このまま書いてても閉じるボタン専用になるてかremoveイベントは違うそう
// question.removeEventListener("click", () => {
//   answer.classList.remove("open");
// });

// includesみたいな感じのやつないかなと調べてcontains出てきた
// question.addEventListener("click", () => {
//   if (answer.classList.contains("open")) {
//     answer.classList.remove("open");
//   } else {
//     answer.classList.add("open");
//   }
// });
// ==========================================
// 質問取得  // 回答取得
const answer = document.querySelector(".answer-wrapper");
const question = document.querySelector(".question-wrapper");
const plus = document.querySelector(".question-img");
const minus = document.querySelector(".minus-icon-img");

// const answer2 = document.querySelector(".answer-wrapper-2");
// const question2 = document.querySelector(".question-wrapper-2");

question.addEventListener("click", () => {
  answer.classList.toggle("open");

  //   画像も変更したい
  plus.classList.toggle("none");
  minus.classList.toggle("go");
});

// 何個も何個も作るの大変だよ
// question2.addEventListener("click", () => {
//   answer2.classList.toggle("open");
// });

// ==========>>>>>===============================
//クリックしてもコンソールに出なかった！けど、一番上に置いたログはでている。
// だからファイルのインポートはできているぽい。
// 次にクリック云々なのか、そもそもanswerとかquestionがどうなっているか、
// nullでした。クラス名が間違ってるのかな
// クラス名はコピペしてるから間違ってないぞ。なんだろう
// 結局１０分くらい考えたり調べたけどわからんくて、GPTに聞いてjsのインポート場所の問題でした。
// HTMLが読まれる前にJSがあるからまだなんもないよお的な。確蟹
// 良い感じにlogを使いながらデバッグできていたと思ったのに

//Document の querySelector() メソッドは、指定された CSS セレクターまたは CSS セレクター群に一致する、文書内の最初の要素
// (Element) を返します。一致するものが見つからない場合は null を返します。
//２個目作っても反応しなくてなんでかなと思ったけど、最初のやつだけなんだって。
