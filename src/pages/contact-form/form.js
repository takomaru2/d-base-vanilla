//最初に関数や正規表現をまとめておいて最後に組み立てるだけみたいな形にする

// 正規表現まとめ

//　名前
//　必須　２文字以上

//　フリガナ
//　必須　全角カナ入力のみ　２文字以上
const furiganaRegex = /^[ァ-ヶー]+$/;

//　メアド
// 必須　メアドの形式
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 電話番号
// 必須 半角数字とハイフンのみアリ 6桁以上20文字以内
const numberRegex = /^[0-9-]+$/;

// 郵便番号
// 必須 半角数字とハイフンのみアリ　7文字

// 都道府県
// 必須

// 市町村
// 必須

// 番地
// 必須

// 液剤　選択
// 必須

// 問い合わせ
// 必須

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

const formControl = document.getElementById("tel"); // input要素取得
const requiredError = document.getElementById("required-error");
const phoneNumberError = document.getElementById("phone-number-error");
const phoneLengthError = document.getElementById("phone-length-error");

formControl.addEventListener("blur", () => {
  // エラー表示をリセット
  formControl.classList.remove("is-visible");
  requiredError.classList.remove("is-visible");
  phoneNumberError.classList.remove("is-visible");
  phoneLengthError.classList.remove("is-visible");
  formControl.classList.remove("input-successful");

  // 空欄の場合
  if (formControl.value === "") {
    requiredError.classList.add("is-visible");
    formControl.classList.add("is-visible");

    // 半角数字以外の場合
  } else if (!numberRegex.test(formControl.value)) {
    phoneNumberError.classList.add("is-visible");
    formControl.classList.add("is-visible");

    // 文字数が正しくない場合(文字数が6文字未満、または20文字より多い場合)
  } else if (formControl.value.length < 6 || formControl.value.length > 20) {
    phoneLengthError.classList.add("is-visible");
    formControl.classList.add("is-visible");
  } else {
    // ここまでの条件に引っかからなかった = 全てOKの場合
    formControl.classList.add("input-successful");
  }
});

// 名前用
const nameInputControl = document.getElementById("name");
const nameRequiredError = document.getElementById("name-required-error");

nameInputControl.addEventListener("blur", () => {
  // エラー表示をリセット
  nameRequiredError.classList.remove("is-visible");
  nameInputControl.classList.remove("is-visible");
  nameInputControl.classList.remove("input-successful");

  if (nameInputControl.value === "") {
    nameRequiredError.classList.add("is-visible");
    nameInputControl.classList.add("is-visible");
  } else {
    nameInputControl.classList.add("input-successful");
  }
});

// フリガナ
const furiganaInputControl = document.getElementById("furigana");
const furiganaError = document.getElementById("furigana-error");
const furiganaRequiredError = document.getElementById(
  "furigana-required-error",
);

furiganaInputControl.addEventListener("blur", () => {
  // エラー表示をリセット
  furiganaRequiredError.classList.remove("is-visible");
  furiganaInputControl.classList.remove("is-visible");
  furiganaError.classList.remove("is-visible");
  furiganaInputControl.classList.remove("input-successful");

  if (furiganaInputControl.value === "") {
    furiganaRequiredError.classList.add("is-visible");
    furiganaInputControl.classList.add("is-visible");
  } else if (!furiganaRegex.test(furiganaInputControl.value)) {
    furiganaError.classList.add("is-visible");
    furiganaInputControl.classList.add("is-visible");
  } else {
    furiganaInputControl.classList.add("input-successful");
  }
});

// メールアドレス
const emailInputControl = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailRequiredError = document.getElementById("email-required-error");

emailInputControl.addEventListener("blur", () => {
  // エラー表示をリセット
  emailRequiredError.classList.remove("is-visible");
  emailInputControl.classList.remove("is-visible");
  emailError.classList.remove("is-visible");
  emailInputControl.classList.remove("input-successful");

  if (emailInputControl.value === "") {
    emailRequiredError.classList.add("is-visible");
    emailInputControl.classList.add("is-visible");
  } else if (!emailRegex.test(emailInputControl.value)) {
    emailError.classList.add("is-visible");
    emailInputControl.classList.add("is-visible");
  } else {
    emailInputControl.classList.add("input-successful");
  }
});

//　郵便番号
// numberRegexで数字とハイフンのみにする
// removeHyphenで数字のみにする
// length見て桁数制限
const postalCodeInputControl = document.getElementById("postal-code");
const postalCodeError = document.getElementById("postal-code-error");
const postalRequiredError = document.getElementById(
  "postal-code-required-error",
);

postalCodeInputControl.addEventListener("blur", () => {
  // エラー表示をリセット
  postalRequiredError.classList.remove("is-visible");
  postalCodeInputControl.classList.remove("is-visible");
  postalCodeError.classList.remove("is-visible");
  postalCodeInputControl.classList.remove("input-successful");

  if (postalCodeInputControl.value === "") {
    postalRequiredError.classList.add("is-visible");
    postalCodeInputControl.classList.add("is-visible");
  } else if (!numberRegex.test(postalCodeInputControl.value)) {
    postalCodeError.classList.add("is-visible");
    postalCodeInputControl.classList.add("is-visible");
  } else {
    const postalCode = removeHyphen(postalCodeInputControl.value);
    if (postalCode.length === 7) {
      postalCodeInputControl.classList.add("input-successful");
    } else {
      postalCodeError.classList.add("is-visible");
      postalCodeInputControl.classList.add("is-visible");
    }
  }
});
