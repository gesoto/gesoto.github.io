var inx = []; // # of img, vid, comp, link || # of slides for carousel
var int = []; // 0=img, 1=vid, 2=comp, 4-9=carousel, >10=links
var ims = '<img src="';
var ime = '.jpg" alt="">';
var vds = '<video src="';
var vde = '.mp4" type="video/mp4" playsinline autoplay loop muted></video>';
var dm = 'https://ssoto.deanbritto.com/portfolio/content/';
var ov1 = '<div><img src="';
var ov2 = '.png" class="over" alt=""><video src="';
var ov3 = '.mp4" type="video/mp4" playsinline autoplay loop muted></video></div>';
var inp1 = '<input type="image" src="';
var inp2 = '.jpg" onclick="openlink(';
var inp3 = ')"/>';
var car1 = '<div class="carousel" id="carousel';
var car2 = '">';
var car3 = '</div>';
var carspeed = 6;

function write(e) {
  for (var i = 0; i < inx.length; i++) {
    if (int[i] == 0) { // img
      document.write(ims + dm + e + '/p' + inx[i] + ime);
    } else if (int[i] == 1) { // video
      document.write(vds + dm + e + '/p' + inx[i] + vde);
    } else if (int[i] == 2) { // (video + img) composition
      document.write(ov1 + dm + e + '/p' + inx[i] + ov2 + dm + e + '/p' + inx[i] + ov3);
    } else if (int[i] > 10) { // input link
      document.write(inp1 + dm + e + '/p' + inx[i] + inp2 + ("link" + int[i]) + inp3);
    } else if (int[i] > 3 && int[i] < 10) { // carousel
      document.write(car1 + int[i] + car2);
      for (var u = 1; u <= inx[i]; u++) {
        document.write(ims + dm + e + '/slider/' + int[i] + '/' + u + ime);
      }
      document.write(ims + dm + e + '/slider/' + int[i] + '/' + 1 + ime);
      document.write(ims + dm + e + '/slider/' + int[i] + '/' + 2 + ime);
      document.write(car3);
      document.write('<script>TweenMax.to(carousel' + int[i] + ', (' + carspeed + ' * ' + inx[i] + '), { x: -(600 * ' + inx[i] + '), repeat: -1, ease: Linear.easeNone });</script>');
    }
  }
}