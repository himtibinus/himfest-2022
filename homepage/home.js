function fallback(one, two) {
  if (window[two.replace("#", "")] == undefined) {
    if (window[one.replace("#", "")] == undefined) {
      $(one).html("0");
      $(two).html("0");
    }
    $(one).html("0");
    $(two).html(window[one.replace("#", "")]);
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

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

const hero = [
  {
    title: "COMPETITION",
    heroImg: "assets/heroImg2.svg",
    date: new Date(2022, 9, 25, 21, 0, 0, 0),
    class: "enlarge-title"
  },
  {
    title: "TECHTALK",
    heroImg: "assets/heroImg3.svg",
    date: new Date(2022, 11, 1, 21, 0, 0, 0),
    class: "enlarge-title"
  },
  {
    title: "TECHFEST",
    heroImg: "assets/heroImg4.svg",
    date: new Date(2022, 11, 17, 0, 0, 0, 0),
    class: "enlarge-title"
  },
  {
    title: "BUILDING ADAPTIVE, COLLABORATIVE, AND INNOVATIVE GEN Z TECH TALENT",
    heroImg: "assets/heroImg1.svg",
    date: new Date(2022, 11, 17, 0, 0, 0, 0),
    class: "normal-title"
  }
];

var countDownDate = hero[3].date.getTime();

function changeHero() {
  let temp = hero[0];

  if (
    (temp.class == "enlarge-title" && hero[3].class == "normal-title") ||
    (temp.class == "normal-title" && hero[3].class == "enlarge-title")
  ) {
    $("#hero-title p").animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });
  }

  $("#hero-title h1").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $(this).html(temp.title);

    if (temp.class == "enlarge-title") {
      $("#hero-title h1").removeClass();
      $("#hero-title h1").addClass(
        "text-[34px] text-center md:text-6xl md:text-left xl:text-7xl 2xl:text-[80px]"
      );
    } else if (temp.class == "normal-title") {
      $("#hero-title h1").removeClass();
      $("#hero-title h1").addClass(
        "text-[18px] text-center md:text-3xl md:text-left xl:text-4xl 2xl:text-5xl"
      );
    }
  });

  $(".hero-img").fadeOut(400, function () {
    $(this).attr("src",temp.heroImg);
  }).fadeIn(400)

  countDownDate = temp.date.getTime();
  hero.push(hero.shift());
}

setInterval(changeHero, 3000);

const doubleDigit = (num) => {
  return ("0" + String(num)).slice(-2);
};

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if(distance > 0) {
    var days = doubleDigit(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = doubleDigit(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = doubleDigit(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = doubleDigit(Math.floor((distance % (1000 * 60)) / 1000));

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

    if ($("#days1").html() == "0" && $("#days2").html() == "0"){
      $("#days").hide();
      $("#seconds").show();
    }
    else if ($("#days1").html() !== "0" || $("#days2").html() !== "0"){
      $("#days").show();
      $("#seconds").hide();
    }
  }
  else {
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
