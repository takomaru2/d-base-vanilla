const removeHyphen = (inputValue) => {
  const isNumber = (str) => {
    return str !== "-";
  };
  // 例　inputValue = 00-00
  if (inputValue.indexOf("-") < 0) {
    return inputValue;
  } else {
    // ハイフンを抜き出すぞ
    // 配列にする value["0","0","-","0","0"]
    const array = inputValue.split("");

    const num = array.filter(isNumber);
    //戻す
    return num.join("");
  }
};

// todo: 必須の表示がしたいものは配列に追加
const ids = [
  "name",
  "furigana",
  "email",
  "tel",
  "postal-code",
  "prefecture",
  "city",
  "street-address",
  "coating-product",
  "message",
];

for (let i = 0; i < ids.length; i++) {
  const id = ids[i];

  // 入力欄を参照して変数に入れてる
  const input = document.getElementById(id);

  // 特殊エラーメッセージを参照して変数にいれている
  let specialError = null;

  //idがemailかfuriganaなのか ->　特殊なのか見ている//
  // todo: 特殊なエラーの場合ここにも追加
  const isSpecialForm =
    id === "email" || id === "furigana" || id === "postal-code" || id === "tel";

  // idがemailかfuriganaだったら
  if (isSpecialForm) {
    // エラーメッセージを変数に入れている
    specialError = document.getElementById(id + "-error");
  }

  // 必須エラーメッセージを参照して変数にいれている
  const requiredError = document.getElementById(id + "-required-error");

  // 入力欄からカーソルが外れた時に実行されるプログラムを設定している
  input.addEventListener("blur", () => {
    /* ==========リセットをしている==========　*/
    // エラーメッセージを画面から消す
    requiredError.classList.remove("is-visible");

    // 入力欄の赤い枠線を消す
    input.classList.remove("is-visible");

    if (isSpecialForm) {
      specialError.classList.remove("is-visible");
    }

    // 入力欄の緑の枠線を消す
    input.classList.remove("input-successful");

    /* ==========リセットをしている==========　*/
    // 入力欄の中身がないか
    if (input.value === "") {
      // エラーメッセージを表示
      requiredError.classList.add("is-visible");

      // 入力欄に赤い枠線を表示
      input.classList.add("is-visible");

      return;
    }

    // ==========特殊なvalidation==========
    //todo: 抽象化できそう
    if (id === "furigana") {
      //　フリガナ
      //　必須　全角カナ入力のみ　２文字以上　こう言う変数宣言近い方が良い近いのがスタートと考えて良い
      const furiganaRegex = /^[ァ-ヶー]+$/;
      if (!furiganaRegex.test(input.value)) {
        specialError.classList.add("is-visible");
        input.classList.add("is-visible");

        return;
      }
    }

    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        specialError.classList.add("is-visible");
        input.classList.add("is-visible");

        return;
      }
    }

    if (id === "postal-code") {
      const numberRegex = /^[0-9-]+$/;
      if (!numberRegex.test(input.value)) {
        specialError.classList.add("is-visible");
        input.classList.add("is-visible");
        return;
      }

      const postalCode = removeHyphen(input.value);
      if (postalCode.length !== 7) {
        specialError.classList.add("is-visible");
        input.classList.add("is-visible");

        return;
      }
    }

    if (id === "tel") {
      const numberRegex = /^[0-9-]+$/;
      if (!numberRegex.test(input.value)) {
        specialError.classList.add("is-visible");
        input.classList.add("is-visible");

        return;
      }

      const tel = removeHyphen(input.value);
      if (tel.length < 6 || tel.length > 20) {
        specialError.classList.add("is-visible");
        input.classList.add("is-visible");

        return;
      }
    }
    // ==========特殊なvalidation==========

    // 全部validなら入力欄に緑の枠線を表示
    input.classList.add("input-successful");
  });
}

//todo: 送信時のロジック　持ってきて書く
