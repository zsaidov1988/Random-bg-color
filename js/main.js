
let elBtn = document.querySelector('.button');



elBtn.addEventListener('click', function (e) {
  let elBody = document.body;
  let redColor = Math.random() * 255;
  let greenColor = Math.random() * 255;
  let blueColor = Math.random() * 255;
  let bgColor = `rgba(${redColor}, ${greenColor}, ${blueColor}, 0.8)`;
  let bgColor1 = `rgba(${redColor}, ${greenColor}, ${blueColor}, 1)`;
  elBody.style.backgroundColor = bgColor;
  elBtn.style.backgroundColor = bgColor1;
})