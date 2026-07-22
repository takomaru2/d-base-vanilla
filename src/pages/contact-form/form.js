const telElement = document.getElementById("tel");
const requiredError = document.getElementById("required-error");

// inputが間違っている時のCSS用の要素取得
const inputErrorBorder = document.getElementById("tel");

telElement.addEventListener("blur", () => {
  // 空欄のとき
  if (telElement.value === "") {
    requiredError.classList.add("is-visible");
    inputErrorBorder.classList.add("is-visible");
  } else {
    requiredError.classList.remove("is-visible");
    inputErrorBorder.classList.remove("is-visible");
  }

  // 入力が半角数字じゃなかったら
  const phoneNumberError = document.getElementById("phone-number-error");

  if (!/^[0-9]+$/.test(telElement.value)) {
    phoneNumberError.classList.add("is-visible");
    inputErrorBorder.classList.add("is-visible");
  } else {
    phoneNumberError.classList.remove("is-visible");
    inputErrorBorder.classList.add("is-visible");
  }

  // 全ての条件をクリアした時のみ成功クラスを付与したい
  // elementのvalueのlengthが6文字以上２０文字以内の場合
  const isValidLength =
    inputErrorBorder.value.length >= 6 && inputErrorBorder.value.length < 20;

  if (
    telElement.value !== "" &&
    /^[0-9]+$/.test(telElement.value) &&
    isValidLength
  ) {
    inputErrorBorder.classList.add("input-successful");
  } else {
    inputErrorBorder.classList.remove("input-successful");
  }
});

/*=============================================================================*/
/*=============================================================================*/
