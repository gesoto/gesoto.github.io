var ims = '<img src="';
var ime = '.jpg" alt="">';
var vds = '<video src="';
var vde = '.mp4" type="video/mp4" playsinline autoplay loop muted></video>';
var dm = "https://ssoto.deanbritto.com/prtf/content/";
var ov1 = '<div><img src="' + dm;
var ov2 = '.png" class="over" alt=""><video src="' + dm;
var ov3 =
  '.mp4" type="video/mp4" playsinline autoplay loop muted></video></div>';
var sec = set + "/p";

var im0 = '<div id="strip" class="strip">';
var im1 = '<img src="https://source.unsplash.com/600x400?sig=';
var im2 = '"/>';
var im3 =
  '</div><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script><script>var strip = document.getElementById("strip");TweenMax.to(strip, 5, { x: -1800, repeat: -1, ease: Linear.easeNone });</script>';

function write() {
  document.write(im0);
  for (var i = 0; i < simg.length; i++) {
    // if (int[i] == 0) {
    document.write(im1 + simg[i] + im2);
    // } else if (int[i] == 1) {
    //   document.write(vds + dm + sec + inx[i] + vde);
    // } else if (int[i] == 2) {
    //   document.write(ov1 + sec + inx[i] + ov2 + sec + inx[i] + ov3);
    // }
  }
  document.write(im0);
}

write();
