$.global = new Object();

$.global.item = 1;
$.global.total = 0;
$.global.slider = 0;

$(document).ready(function() {
  var SlideCount = $("#slides li").length;
  var SliderWidth = SlideCount * 100;
  var SlideWidth = 100 / SlideCount;

  $.global.total = SlideCount;

  $("#image-carousel .handle").css("width", "" + SliderWidth + "%");
  $("#image-carousel .handle .slide").css("width", "" + SlideWidth + "%");

  DragIt();

  $("#image-carousel").mousedown(function() {
    setTimeout(function() {
      var $number = $.global.slider.getStep();
      $("#console").html($number);
    }, 666);
  });

  $("#right-arrow").click(function() {
    var $currentstep = $.global.slider.getStep();
    var $nextstep = parseInt($currentstep) + 1;
    $.global.slider.setStep($nextstep);
  });

  $("#left-arrow").click(function() {
    var $currentstep = $.global.slider.getStep();
    var $nextstep = parseInt($currentstep) - 1;
    $.global.slider.setStep($nextstep);
  });
});

function DragIt() {
  $.global.slider = new Dragdealer("image-carousel", {
    steps: $.global.total,
    speed: 0.2,
    loose: true,
    css3: true,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    requestAnimationFrame: true,
    callback: function(x, y) {
      checkArrow();
      $("#console").html(x);
    }
  });
}

function checkArrow() {
  // console.log("slide" + $.global.slider.getStep());
  if ($.global.slider.getStep() == "1,1") {
    // console.log("1st");
    document.getElementById("left-arrow").style.display = "none";
  } else if ($.global.slider.getStep() == "4,1") {
    // console.log("last");
    document.getElementById("right-arrow").style.display = "none";
  } else {
    document.getElementById("left-arrow").style.display = "block";
    document.getElementById("right-arrow").style.display = "block";
    // document.getElementById("left-arrow").style.opacity = 1;
    // document.getElementById("right-arrow").style.opacity = 1;
  }
}

function starttrans1() {
  var $currentstep = $.global.slider.getStep();
  var $nextstep = parseInt($currentstep) + 1;
  $.global.slider.setStep($nextstep);
}

function starttrans2() {
  var $currentstep = $.global.slider.getStep();
  var $nextstep = parseInt($currentstep) - 1;
  $.global.slider.setStep($nextstep);
}

setTimeout(checkArrow, 10);

