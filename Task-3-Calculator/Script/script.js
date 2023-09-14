var screenValue = "";
var screen = document.querySelector("#space");
var buttons = document.querySelectorAll(".test");

for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText
        if (buttonText == '%') {
            screenValue = screenValue/100;
            screen.innerText = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = screenValue.slice(0, -1);
            screen.innerText = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = '';
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.innerText = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    });
}