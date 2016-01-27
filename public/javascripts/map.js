function getPoints() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "/api/crumbs", false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function initialize() {
  var center = {lat: 39.50, lng: -98.35};
  var points = getPoints();
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  for (var count in points) {
    new google.maps.Marker({
      position: {lat: points[count].latitude, lng: points[count].longitude},
      map: map,
      title: points[count].trip
    });
  }
}

// draw map
google.maps.event.addDomListener(window, 'load', initialize);
getPoints();