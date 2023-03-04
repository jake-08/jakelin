const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

setTimeout(function() {
    card1.style = "transform: rotateY(180deg); -webkit-transform: rotateY(180deg); -ms-transform: rotateY(180deg);";
  }, 2000)

  setTimeout(function() {
    card2.style = "transform: rotateY(180deg); -webkit-transform: rotateY(180deg); -ms-transform: rotateY(180deg);";
  }, 3000)


  setTimeout(function() {
    card1.style.transform = "";
  }, 4000)

  setTimeout(function() {
    card2.style.transform = "";
  }, 5000)