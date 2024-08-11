document.getElementById("open").addEventListener("click", function () {
  var container = document.getElementById("openContainer");
  var halo = document.getElementById("halo");

  // Memicu animasi tirai dan menghilangkan container
  container.classList.add("slide-up");
  container.addEventListener("animationend", function () {
    container.remove();
    // Setelah container hilang, tampilkan elemen "Halooo"
    halo.style.display = "block";
  });
});

function initMap() {
  var location = { lat: -34.397, lng: 150.644 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

var countDownDate = new Date("Dec 25, 2024 10:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
