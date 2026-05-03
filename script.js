
const display = document.getElementById("display");
const historyList = document.getElementById("history");

function playSound() {
  const audio = new Audio("click.mp3");
  audio.play();
}

function appendValue(value) {
  playSound();
  display.value += value;
}

function clearDisplay() {
  playSound();
  display.value = "";
}

function deleteLast() {
  playSound();
  display.value = display.value.slice(0, -1);
}

function calculate() {
  playSound();

  try {
    const expression = display.value;
    const result = eval(expression);

    addToHistory(expression + " = " + result);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addToHistory(item) {
  const li = document.createElement("li");
  li.textContent = item;
  historyList.prepend(li);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// Keyboard Support

document.addEventListener("keydown", (e) => {

  if ((e.key >= 0 && e.key <= 9) ||
      ["+", "-", "*", "/", ".", "%", "(", ")"].includes(e.key)) {

    appendValue(e.key);
  }

  if (e.key === "Enter") {
    calculate();
  }

  if (e.key === "Backspace") {
    deleteLast();
  }

  if (e.key === "Escape") {
    clearDisplay();
  }
});


