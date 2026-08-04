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
  } else if (!/^[0-9-]+$/.test(formControl.value)) {
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
  } else if (!/^[ァ-ヶー]+$/.test(furiganaInputControl.value)) {
    furiganaError.classList.add("is-visible");
    furiganaInputControl.classList.add("is-visible");
  } else {
    furiganaInputControl.classList.add("input-successful");
  }
});
