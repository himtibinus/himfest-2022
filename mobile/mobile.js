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

const countDowns = [
  {
    date: new Date(2022, 9, 25, 21, 0, 0),
    event: "OPEN REGISTRATION"
  },
  {
    date: new Date(2022, 10, 17, 0, 0, 0),
    event: "TECHNICAL MEETING"
  },
  {
    date: new Date(2022, 11, 4, 23, 59, 59),
    event: "CLOSE REGISTRATION"
  },
  {
    date: new Date(2022, 11, 8, 0, 0, 0),
    event: "FINALIST ANNOUNCEMENT"
  },
  {
    date: new Date(2022, 11, 11, 0, 0, 0),
    event: "FINAL PRESENTATION"
  },
  {
    date: new Date(2022, 11, 17, 0, 0, 0),
    event: "AWARDING DAY"
  },
]

let idx = 0;
for(i in countDowns) {
  let item = countDowns[i];

  if((new Date().getTime()) < (new Date(item.date).getTime())){
    break;
  }
  else{
    idx+=1;
  }
}

const doubleDigit = (num) => {
  return ("0" + String(num)).slice(-2);
};

setInterval(function () {
  var now = new Date().getTime();
  var countDownDate = new Date(countDowns[(idx % countDowns.length)].date).getTime();
  var distance = countDownDate - now;

  if (idx >= 6 || distance < 0) {
    $("#days1").html("0");
    $("#days2").html("0");
    $("#hours1").html("0");
    $("#hours2").html("0");
    $("#minutes1").html("0");
    $("#minutes2").html("0");
    $("#seconds1").html("0");
    $("#seconds2").html("0");

    $("#timeline-ind").html("EVENT FINISHED!");
    
  }
  else {
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

    $("#timeline-ind").html(countDowns[(idx % countDowns.length)].event);
  }

  if ($("#days1").html() == "0" && $("#days2").html() == "0"){
    $("#days").hide();
    $("#seconds").show();
  }
  else if ($("#days1").html() !== "0" || $("#days2").html() !== "0"){
    $("#days").show();
    $("#seconds").hide();
  }
}, 1000);
