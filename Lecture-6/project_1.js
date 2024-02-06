const btn = document.querySelector("button");
const body = document.body;
const cuurent =document.querySelector(".current")
// console.log(body);
function randomColorG() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red} ,${green}  ,${blue})`;
  return randomColor;
}
btn.addEventListener('click', () => {
//   console.log("click me");
  const random = randomColorG();
//   console.log(random);
    body.style.backgroundColor = random;
    cuurent.textContent = random;

});
