var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var css = document.querySelector('h3');
var body = document.querySelector('body');

css.textContent = "This is the current background style to embed:" + "linear-gradient(to right, " + color1.value
 + ", " + color2.value + ")";

function outputs(){
  body.style.background="linear-gradient(to right, " + color1.value
   + ", " + color2.value + ")";
   css.textContent = "This is the current background to embed:" + "linear-gradient(to right, " + color1.value
    + ", " + color2.value + ")";
}

color1.addEventListener('input',outputs);

color2.addEventListener('input',outputs);
