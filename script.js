const rateForm = document.querySelector("#rate-form");

rateForm.addEventListener("submit", (e) => {
  const rate = document.querySelector(".rate-content-box");
  const thank = document.querySelector(".thank-you-content-box");
  const selected = document.querySelector('input[name="rate"]:checked').value;
  document.getElementById(
    "rate-given"
  ).innerHTML = `You selected ${selected} of 5`;

  rate.classList.add("hidden");
  thank.classList.remove("hidden");
  e.preventDefault();
});
