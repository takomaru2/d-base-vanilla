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
const validation = (id) => {
  const input = document.getElementById(id);
  const requiredError = document.getElementById(id + "-required-error");

  let specialError = null;

  // 特殊な入力チェックが必要な項目
  const isSpecialForm =
    id === "email" || id === "furigana" || id === "postal-code" || id === "tel";

  // 特殊エラー用のメッセージ要素を取得
  if (isSpecialForm) {
    specialError = document.getElementById(id + "-error");
  }

  // 表示中のエラー状態をリセット
  requiredError.classList.remove("is-visible");
  input.classList.remove("is-visible");
  input.classList.remove("input-successful");

  if (isSpecialForm) {
    specialError.classList.remove("is-visible");
  }

  // 必須チェック
  if (input.value === "") {
    console.log("必須エラー！！！！");
    requiredError.classList.add("is-visible");
    input.classList.add("is-visible");

    return false;
  }

  //=============特殊ケース=============//

  if (id === "furigana") {
    const furiganaRegex = /^[ァ-ヶー]+$/;

    if (!furiganaRegex.test(input.value)) {
      specialError.classList.add("is-visible");
      input.classList.add("is-visible");

      return false;
    }
  }

  if (id === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input.value)) {
      specialError.classList.add("is-visible");
      input.classList.add("is-visible");

      return false;
    }
  }

  if (id === "postal-code") {
    const numberRegex = /^[0-9-]+$/;

    if (!numberRegex.test(input.value)) {
      specialError.classList.add("is-visible");
      input.classList.add("is-visible");

      return false;
    }

    const postalCode = removeHyphen(input.value);

    if (postalCode.length !== 7) {
      specialError.classList.add("is-visible");
      input.classList.add("is-visible");

      return false;
    }
  }

  if (id === "tel") {
    const numberRegex = /^[0-9-]+$/;

    if (!numberRegex.test(input.value)) {
      specialError.classList.add("is-visible");
      input.classList.add("is-visible");

      return false;
    }

    const tel = removeHyphen(input.value);

    if (tel.length < 6 || tel.length > 20) {
      specialError.classList.add("is-visible");
      input.classList.add("is-visible");

      return false;
    }
  }

  //=============特殊ケース=============//

  // 全てのチェックを通過
  input.classList.add("input-successful");

  return true;
};

for (let i = 0; i < ids.length; i++) {
  const id = ids[i];
  // 入力欄を参照して変数に入れてる
  const input = document.getElementById(id);
  input.addEventListener("blur", () => {
    validation(id);
  });
}
