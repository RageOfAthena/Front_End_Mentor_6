let netvalue = document.querySelector(".calculator_display_number");
let keypad = document.querySelector(".calculator_key");
let display = document.querySelector(".calculator_display");
let toggleparent = document.querySelector(".calculator_theme_toggle");
let toogle1 = document.querySelector(".calculator_theme_toggle_1");
let toogle2 = document.querySelector(".calculator_theme_toggle_2");
let toogle3 = document.querySelector(".calculator_theme_toggle_3");
netvalue.textContent = `0`;
let pressed;
let stack = [];
let stackdisplay = document.createElement("div");
stackdisplay.className = "stackdisplay";
display.prepend(stackdisplay);
let total = 0;
keypad.addEventListener("click", function (e) {
  if (e.target === keypad) return;
  pressed = e.target.textContent;
  if (Number.isInteger(Number(pressed))) {
    netvalue.textContent =
      netvalue.textContent === "0"
        ? `${Number(pressed)}`
        : netvalue.textContent + Number(pressed);
  }
  if (pressed === "." && !netvalue.textContent.includes(".")) {
    netvalue.textContent += pressed;
    // new Intl.NumberFormat("en-IN").format(netvalue.textContent);
  }
  if (pressed === "del") {
    if (netvalue.textContent.length === 1) {
      netvalue.textContent = "0";
    } else {
      netvalue.textContent = netvalue.textContent.slice(0, -1);
      //   new Intl.NumberFormat("en-IN").format(netvalue.textContent);
    }
  }
  if (pressed === "reset") {
    netvalue.textContent = "0";
    stack = [];
    stackdisplay.textContent = `${stack.join(" ")}`;
  }

  if (pressed === "+" || pressed === "-") {
    stack.push(netvalue.textContent);
    stack.push(pressed);
    stackdisplay.textContent = `${stack.join(" ")}`;
    netvalue.textContent = "0";
  }
  if (pressed === "x" || pressed == "/") {
    stack.push(netvalue.textContent);
    // stack.push(")");
    stack.push(pressed);
    // stack.unshift("(");
    stackdisplay.textContent = `${stack.join(" ")}`;
    netvalue.textContent = "0";
  }
  if (pressed === "=") {
    stack.push(netvalue.textContent);
    if (stack.length === 1) {
      stackdisplay.textContent = ``;
    } else {
      stackdisplay.textContent = `${stack.join(" ")}`;

      while (stack.length > 1) {
        x = stack.shift();
        y = stack.shift();
        z = stack.shift();
        switch (y) {
          case "+":
            stack.unshift(Number(x) + Number(z));
            break;
          case "-":
            stack.unshift(Number(x) - Number(z));
            break;
          case "x":
            stack.unshift(Number(x) * Number(z));
            break;
          case "/":
            stack.unshift(Number(x) / Number(z));
            break;
        }
      }
    }
    netvalue.textContent = `${stack[0]}`;
    stack = [];
  }
});
console.log(window.location.href);
toggleparent.addEventListener("click", function (e) {
  if (e.target === toggleparent || e.target.parentNode !== toggleparent) {
    // console.log("here");
    return;
  }
  if (e.target === toogle1) {
    toogle1.classList.remove("hidden");
    toogle2.classList.add("hidden");
    toogle3.classList.add("hidden");
    location.assign("index.html");
  }
  if (e.target === toogle2) {
    toogle2.classList.remove("hidden");
    toogle1.classList.add("hidden");
    toogle3.classList.add("hidden");
    location.assign("index2.html");
  }
  if (e.target === toogle3) {
    toogle3.classList.remove("hidden");
    toogle2.classList.add("hidden");
    toogle1.classList.add("hidden");
    location.assign("index3.html");
  }
});
