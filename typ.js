var i = 0;
var w = -1;
var words = ["Hello,👋", "Hola,", "你好,", "🖥 👀"];
var time = [10000, 3000, 3000, 3000];
var str;
var writespeed = 100;
var deletespeed = 25;
var wordrestart = 200;

function typetext() {
  if (i < words[w].length) {
    document.getElementById("ttl").innerHTML += words[w].charAt(i);
    i++;
    setTimeout(typetext, writespeed); // speed to write words
  }
}

function typeloop() {
  if (w < words.length - 1) {
    w++;
  } else {
    w = 0;
  }
  i = 0;
  document.getElementById("ttl").innerHTML = "";
  typetext();
  setTimeout(iniremove, time[w]);
}

function removetext() {
  if (i > 0) {
    str = str.slice(0, -1);
    document.getElementById("ttl").innerHTML = str;
    i--;
    setTimeout(removetext, deletespeed); // speed to delete words
  } else {
    setTimeout(typeloop, wordrestart); // before starting a new word
  }
}

function iniremove() {
  str = words[w];
  removetext();
}

// setTimeout(typeloop, 500);