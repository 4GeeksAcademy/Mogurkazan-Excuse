/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //generar la excusa aleatoria
  function getRandomExcuse() {
    //Piezas de la excusa
    const who = ["The dog", "My grandma", "His turtle", "My bird"];
    const action = ["ate", "peed", "crushed", "broke"];
    const what = ["my homework", "the keys", "the car", "the bike"];
    const when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    //generar número random
    const whoIndex = Math.floor(Math.random() * who.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const whatIndex = Math.floor(Math.random() * what.length);
    const whenIndex = Math.floor(Math.random() * when.length);

    // Generar excusa completa
    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }
  const excuseButton = document.getElementById("excuseButton");

  //Enlazar botón con excusa
  excuseButton.addEventListener("click", function() {
    // Mostrar la excusa
    const excuse = getRandomExcuse();
    document.getElementById("excuse").innerText = excuse;
  });
};
