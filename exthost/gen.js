var ims = '<img src="';
var ime = '.jpg" alt="">';
var vds = '<video src="';
var vde = '.mp4" type="video/mp4" playsinline autoplay loop muted></video>';
var dm = "https://ssoto.deanbritto.com/prtf/content/";
var ov1 = '<div><img src="' + dm;
var ov2 = '.png" class="over" alt=""><video src="' + dm;
var ov3 = '.mp4" type="video/mp4" playsinline autoplay loop muted></video></div>';
var sec = set + '/p';

function write() {
  for (var i = 0; i < inx.length; i++) {
    if (int[i] == 0) {
      document.write(ims + dm + sec + inx[i] + ime);
    } else if (int[i] == 1) {
      document.write(vds + dm + sec + inx[i] + vde);
    } else if (int[i] == 2) {
      document.write(ov1 + sec + inx[i] + ov2 + sec + inx[i] + ov3);
    }
  }
}

write();