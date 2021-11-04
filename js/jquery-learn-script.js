// JQuery hide and show
$(document).ready(function () {
  $("#all-selector").click(function () {
    $("*").hide();
  });

  $("#header-selector-hide").click(function () {
    $("h1").hide();
    $("h2").hide();
    $("h3").hide();
  });

  $("#header-selector-show").click(function () {
    $("h1").show();
    $("h2").show();
    $("h3").show();
  });

  $("#code-selector").click(function () {
    $("code").toggle(1000);
    $("pre").toggle(1000);
  });
});

// jQuery Fading
$(document).ready(function () {
  $("#fade-in").click(function () {
    $("#div1-fade").fadeIn();
    $("#div2-fade").fadeIn("slow");
    $("#div3-fade").fadeIn(3000);
  });

  $("#fade-out").click(function () {
    $("#div1-fade").fadeOut();
    $("#div2-fade").fadeOut("slow");
    $("#div3-fade").fadeOut(3000);
  });

  $("#fade-toggle").click(function () {
    $("#div1-fade").fadeToggle();
    $("#div2-fade").fadeToggle("slow");
    $("#div3-fade").fadeToggle(3000);
  });

  $("#fade-to").click(function () {
    $("#div1-fade").fadeTo("slow", 0.15);
    $("#div2-fade").fadeTo("slow", 0.4);
    $("#div3-fade").fadeTo("slow", 0.7);
  });
});
