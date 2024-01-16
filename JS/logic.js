let passInput = document.getElementById("pass");
let passWord = "123456789";
let btn = document.getElementById("btn");
let position = 1;

btn.addEventListener("mouseover", check);
function check() {
  if (passInput.value === passWord) {
    btn.style.transform = "translateX(0)";
    btn.style.backgroundColor = "#cddc39";
  } else if (passInput.value === "" || passInput.value !== passWord) {
    btn.style.transform = `translateX(${position * 120}px)`;
    btn.style.backgroundColor = "red";
  }
}
btn.addEventListener("mouseover", () => {
  position *= -1;
});
passInput.addEventListener("input", function () {
  if (passInput.value === passWord) {
    btn.style.transform = "translateX(0)";
    btn.style.backgroundColor = "#cddc39";
  }
});
