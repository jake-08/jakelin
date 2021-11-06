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

// jQuery Animate
$(document).ready(function () {
  $("#left-animate").click(function () {
    $("#div1-animate").animate({ left: "250px" });
  });

  $("#multiple-animate").click(function () {
    $("#div1-animate").animate({
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    });
  });

  $("#toggle-animate").click(function () {
    $("#div1-animate").animate({ height: "toggle" }, "slow", "linear");
  });

  $("#queue-animate").click(function () {
    var div = $("#div1-animate");
    div.animate({ height: "300px", opacity: "0.4" }, "slow");
    div.animate({ width: "300px", opacity: "0.8" }, "slow");
    div.animate({ height: "100px", opacity: "0.4" }, "slow");
    div.animate({ width: "100px", opacity: "0.8" }, "slow");
  });

  $("#callback-animate").click(function () {
    var div = $("#div1-animate");
    startAnimation();
    function startAnimation() {
      div.animate({ height: "300px", opacity: "0.4" }, "slow");
      div.animate({ width: "300px", opacity: "0.8" }, "slow");
      div.css("background-color", "blue");
      div.animate({ height: "100px", opacity: "0.4" }, "slow");
      div.animate({ width: "100px", opacity: "0.8" }, "slow", startAnimation);
    }
  });

  $("#alternative-animate").click(function () {
    $("#div2-animate").animate(
      {
        height: "300px",
        width: "300px",
      },
      {
        duration: 5000,
        easing: "linear",
        complete: function () {
          $(this).after("<p>Animation is complete!</p>");
        },
      }
    );
  });

  $("#progress-animate").click(function () {
    $("#div3-animate").animate(
      {
        width: "400px",
      },
      {
        duration: 5000,
        easing: "linear",
        step: function (x) {
          $("#progress-percent").text(Math.round((x * 100) / 400) + "%");
        },
      }
    );
  });

  $("#stop-animate-flip").click(function () {
    $("#stop-animate-panel").slideDown(5000);
  });
  $("#stop-animate").click(function () {
    $("#stop-animate-panel").stop();
  });
});

// jQuery Callback and Chaining
$(document).ready(function () {
  $("#callback-hide").click(function () {
    $("#callback-p").hide("slow", function () {
      alert("This paragraph is now hidden");
    });
  });

  $("#chaining").click(function () {
    $("#chaining-p").css("color", "blue").slideUp(2000).slideDown(2000);
  });
});

// jQuery DOM
$(document).ready(function () {
  $("#dom-btn1").click(function () {
    alert("Text: " + $("#dom-text-1").text());
  });

  $("#dom-btn2").click(function () {
    alert("HTML: " + $("#dom-text-1").html());
  });

  $("#dom-btn3").click(function () {
    alert("Value: " + $("#dom-text-2").val());
  });

  $("#dom-btn4").click(function () {
    alert($("#w3s-1").attr("href"));
  });

  $("#dom-btn5").click(function () {
    $("#dom-text-3").text("Hello world!");
  });

  $("#dom-btn6").click(function () {
    $("#dom-text-4").html("<b>Hello world!</b>");
  });

  $("#dom-btn7").click(function () {
    $("#dom-text-5").val("Dolly Duck");
  });

  $("#dom-btn8").click(function () {
    $("#w3s-2").attr({
      href: "https://www.w3schools.com/jquery/",
      title: "W3Schools.com/jquery/",
    });
    $("#w3s-2").text("W3Schools.com/jquery/");
  });

  $("#dom-btn9").click(function () {
    $("#dom-text-6, #dom-text-7").append("<b>Appended text</b>.");
  });

  $("#dom-btn10").click(function () {
    $("#dom-text-8").append("<li>Appended item</li>");
  });

  $("#dom-btn11").click(function () {
    $("#dom-text-6, #dom-text-7").prepend("<b>Prepended text</b>.");
  });

  $("#dom-btn12").click(function () {
    $("#dom-text-8").prepend("<li>Prepended item</li>");
  });

  $("#dom-btn13").click(function () {
    $("#div-before-after").before("<b>Before</b>");
  });

  $("#dom-btn14").click(function () {
    $("#div-before-after").after("<b>After</b>");
  });

  $("#dom-btn15").click(function () {
    $("#div1-remove").remove();
  });

  $("#dom-btn16").click(function () {
    $("#div1-remove").empty();
  });

  $("#dom-btn17").click(function () {
    $("p").remove(".remove-test");
  });

  $("#dom-btn18").click(function () {
    $("p").remove(".remove-test, .remove-demo");
  });
});

// jQuery Filters
$(document).ready(function () {
  $("#filter-input-1").keyup(function () {
    var value = $("#filter-input").val().toLowerCase();
    $("#filter-table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#filter-input-2").keyup(function () {
    var value = $(this).val().toLowerCase();
    $("#filter-list li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#filter-input-3").keyup(function () {
    var value = $(this).val().toLowerCase();
    $("#filter-div *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
