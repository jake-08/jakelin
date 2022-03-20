/*
################################################################################################
               Theme Script
################################################################################################
*/
let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("blue");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "blue") {
    document.getElementById("theme-style").href = "../css/blue.css";
  }
  if (mode == "light") {
    document.getElementById("theme-style").href = "../css/default.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "../css/green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "../css/purple.css";
  }
  localStorage.setItem("theme", mode);
}

/*
################################################################################################
                Line Clamp for Blog Blurb
################################################################################################
*/

var postIntro = document.querySelectorAll(".js-post-intro");

for (var i = 0; i < postIntro.length; i++) {
  $clamp(postIntro[i], { clamp: 7 });
}

/*
################################################################################################
               Design Palette
################################################################################################
*/
const paletteEl = document.querySelectorAll(".palette");
console.log(paletteEl)

for(let i = 0; i < paletteEl.length; i++) {
  paletteEl[i].childNodes[3].addEventListener('click', () => {
    const textarea = document.createElement("textarea");
    const paletteValue = paletteEl[i].childNodes[1].innerText;

    if (!paletteValue) {
      return;
    }

    textarea.value = paletteValue;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert(`${paletteValue} coppied to clipboard!`);
  });
}
