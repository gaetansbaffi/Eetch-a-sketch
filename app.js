let container = document.querySelector("#container");

function createBoard(number = 10) {
  for (let index = 1; index <= number * number; index++) {
    let div = document.createElement("div");
    div.setAttribute("id", index);
    div.className = "square";
    container.append(div);
    let squaredNumber = number * 10;
    container.style.height = `${squaredNumber}px`;
    container.style.width = `${squaredNumber}px`;
  }
}

createBoard(100);

let squares = container.querySelectorAll("div");

squares.forEach((square) =>
  square.addEventListener("mouseover", (e) =>
    console.log((e.target.className += " black"))
  )
);
