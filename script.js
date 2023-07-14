const container = document.getElementById("tabellone");

for (let i = 0; i < 76; i++) {
  const div = document.createElement("div");
  div.innerText = i + 1;
  container.appendChild(div);
  div.classList.add("cell");
  console.log(i);
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const number = Math.floor(Math.random() * 76) + 1;
  const boxes = document.querySelectorAll(".cell");
  boxes[number - 1].style.backgroundColor = "red";

  [...Array, key()];
  //to avoid a number popping u twice,
  //build an array of 76 nums and then use one random num to
  //select the cell then remove that num from the origanal array
  //by so doing, you can only pick a different num everytime...

  console.log(boxes);
  console.log(number);
  console.log(boxes[number - 1]);
});
