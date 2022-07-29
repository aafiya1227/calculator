let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (const items of buttons) {
  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "C") {
      backspace = screen.value;
      restNum = backspace.slice(0, -1);
      screenValue = restNum;
      screen.value = screenValue;
    } else if (buttonText == "%") {
      screenValue = buttonText / 100;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
