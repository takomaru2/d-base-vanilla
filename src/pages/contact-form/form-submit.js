const form = document.getElementById("form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  // ============================================//
  e.preventDefault();
  let isValid = true;

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];

    if (!validation(id)) {
      isValid = false;
    }
  }

  if (!isValid) {
    e.preventDefault();
    return;
  }

  // ============================================//
  const formData = new FormData(form);
  formData.append("access_key", "34854d7a-efbf-4678-bced-6abbbbe50e03");

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("お問い合わせを送信しました。");
      form.reset();
    } else {
      alert("お問い合わせの送信に失敗しました。");
    }
  } catch (error) {
    alert("エラーが発生しました。時間をおいてもう一度お試しください。");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
