// const varToString = varObj => Object.keys(varObj)[0];

// function fallback(one, two) {
//     if (two == undefined) {
//         if (one == undefined) {
//             $('#' + varToString({ one }) + '').html('0'); $('#' + varToString({ two }) + '').html('0');
//         }
//         $('#' + varToString({ one }) + '').html('0');
//         $('#' + varToString({ two }) + '').html(one);
//     }
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    if (currentScrollPos <= 200) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-150px";
    }
  }
  prevScrollpos = currentScrollPos;
};

var countDownDate = new Date("2022, 12, 31").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var days1 = String(days)[0];
  var days2 = String(days)[1];
  var hours1 = String(hours)[0];
  var hours2 = String(hours)[1];
  var minutes1 = String(minutes)[0];
  var minutes2 = String(minutes)[1];
  var seconds1 = String(seconds)[0];
  var seconds2 = String(seconds)[1];

  $("#days1").html(days1);
  $("#days2").html(days2);
  $("#hours1").html(hours1);
  $("#hours2").html(hours2);
  $("#minutes1").html(minutes1);
  $("#minutes2").html(minutes2);
  $("#seconds1").html(seconds1);
  $("#seconds2").html(seconds2);

  // fallback(seconds1, seconds2);
  // fallback(minutes1, minutes2);
  // fallback(hours1, hours2);
  // fallback(days1, days2);

  if (seconds2 == undefined) {
    if (seconds1 == undefined) {
      $("#seconds1").html("0");
      $("#seconds2").html("0");
    }
    $("#seconds1").html("0");
    $("#seconds2").html(seconds1);
  }

  if (minutes2 == undefined) {
    if (minutes1 == undefined) {
      $("#minutes1").html("0");
      $("#minutes2").html("0");
    }
    $("#minutes1").html("0");
    $("#minutes2").html(minutes1);
  }

  if (hours2 == undefined) {
    if (hours1 == undefined) {
      $("#hours1").html("0");
      $("#hours2").html("0");
    }
    $("#hours1").html("0");
    $("#hours2").html(hours1);
  }

  if (days2 == undefined) {
    if (days1 == undefined) {
      $("#days1").html("0");
      $("#days2").html("0");
    }
    $("#days1").html("0");
    $("#days2").html(days1);
  }

  if ($("#days1").html() == "0" && $("#days2").html() == "0") {
    $("#days").hide();
  } else if (
    ($("#days1").html() !== "0" || $("#days2").html() !== "0") &&
    !(distance < 0)
  ) {
    $("#seconds").hide();
    if ($("#days1").html() == "0" && $("#days2").html() == "1") {
      $(".label").first().html("DAY");
    }
  }

  if (distance < 0) {
    clearInterval(x);
    $("#days1").html("0");
    $("#days2").html("0");
    $("#hours1").html("0");
    $("#hours2").html("0");
    $("#minutes1").html("0");
    $("#minutes2").html("0");
    $("#seconds1").html("0");
    $("#seconds2").html("0");
  }
}, 1000);
