function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation not available");
  }
}

function showPosition(position) {
  document.getElementById("lat").value = position.coords.latitude;
  document.getElementById("long").value = position.coords.longitude;
}

window.onload = getLocation();