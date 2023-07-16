const container = document.getElementById("tabellone");

for (let i = 0; i < 76; i++) {
  const div = document.createElement("div");
  div.innerText = i + 1;
  container.appendChild(div);
  div.classList.add("cell");
  //console.log(i);
}

let clickedButtons = [...Array(76).keys(75)];
for (let i = 0; i < clickedButtons.length; i++) {
  clickedButtons[i] += 1;
  result = clickedButtons[i];
  //console.log(result);
}
//console.log(clickedButtons);

const btn = document.querySelector(".btn");
const extractedButton = () => {
  const number = Math.floor(Math.random() * 76) + 1;
  console.log(number);
  const boxes = document.querySelectorAll(".cell");
  //console.log(number);
  //const clickedButtons = [...Array(77).keys(76)];
  //console.log(clickedButtons);
  //to avoid a number popping u twice,
  //build an array of 76 nums and then use one random num to
  //select the cell then remove that num from the origanal array
  //by so doing, you can only pick a different num everytime...

  //console.log(boxes);
  //console.log(number);
  //console.log(boxes[number - 1]);

  if (clickedButtons.some((n) => n === parseInt(number))) {
    boxes[number - 1].style.backgroundColor = "red";
    clickedButtons = clickedButtons.filter((n) => n !== parseInt(number));
    //console.log(clickedButtons);
  } else {
    extractedButton();
    return;
  }
};
btn.addEventListener("click", extractedButton);

/* const selectedButton = () => {
  /* const clickedButtons = [...Array(76).keys(75)];
  for (let i = 0; i < clickedButtons.length; i++) {
    clickedButtons[i] += 1;
    result = clickedButtons[i];
    //console.log(result);
  }

  if (clickedButtons.some((n) => n === number)) {
    return clickedButtons.filter((n) => n !== number);
  } else {
    return extractedButton();
  } 
};

selectedButton(); */
