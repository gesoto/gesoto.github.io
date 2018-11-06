var i = 0;
var w = -1;
var words = ["Interactive Design", "User Interfaces", "Prototyping", "Pizza 🍕", "Animation", "Programming", "Design", "Making Music", "you for stopping by ❤️"];
var time = [2500, 2300, 2000, 2000, 2000, 2000, 2000, 2000, 4000];
var str;

function typetext() {
  if (i < words[w].length) {
    document.getElementById("ttl").innerHTML += words[w].charAt(i);
    i++;
    setTimeout(typetext, 100); // speed to write words
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
    setTimeout(removetext, 25); // speed to delete words
  } else {
    setTimeout(typeloop, 200); // before starting a new word
  }
}

function iniremove() {
  str = words[w];
  removetext();
}

setTimeout(typeloop, 500);