const input = document.querySelectorAll("input");
const submit = document.getElementById("submit");

let rate;

input.forEach((element) => {
  element.addEventListener("click", (e) => {
    rate = e.target.value;
  });
});

submit.addEventListener("click", () => {
  if (rate !== undefined) {
    document.getElementById("revealed").style.display = "none";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("rate-given").innerText = rate;
  }
});
