/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //generar número random
  function generarNumero() {
    return Math.floor(Math.random() * 4);
  }
  let whoRandom = who[generarNumero()];
  let actionRandom = action[generarNumero()];
  let whatRandom = what[generarNumero()];
  let whenRandom = when[generarNumero()];
  let excusa =
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
  console.log(excusa);
  document.getElementById("excuse").innerText = excusa;
  console.log("Hello Rigo from the console!");
};
