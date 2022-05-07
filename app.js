let container = document.querySelector("#container");
let buttonGenerate = document.querySelector("#generate");
let buttonClear = document.querySelector("#clear");
let input = document.querySelector("input");
let colorChoice = document.querySelector("#color");

function createBoard(number = 10) {
  if (isNaN(number)) {
    number = 10;
  } else if (number > 100) {
    number = 100;
  }
  console.log(number);
  container.innerHTML = "";
  for (let index = 1; index <= number * number; index++) {
    let div = document.createElement("div");
    div.setAttribute("id", index);
    div.className = "square";
    container.append(div);
    div.style.height = div.style.width = `${600 / number}px`;
  }

  let squares = container.querySelectorAll("div");

  squares.forEach((square) =>
    square.addEventListener("mouseover", (e) => hoverEffect(e))
  );
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hoverEffect(e) {
  if (colorChoice.checked) {
    e.target.style.backgroundColor = getRandomColor();
  } else {
    e.target.className += " black";
  }
}

createBoard(10);

buttonGenerate.addEventListener("click", (e) =>
  createBoard(parseInt(input.value || 10))
);
buttonClear.addEventListener("click", (e) =>
  createBoard(parseInt(input.value || 10))
);
