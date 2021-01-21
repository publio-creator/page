var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    window.location.href = `https://www.google.com/maps/place/5%C2%B011'01.1%22S+37%C2%B020'50.1%22W/@${position.coords.latitude},${position.coords.longitude},16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-5.183651!4d-37.347248?hl=pt-BR`
}
