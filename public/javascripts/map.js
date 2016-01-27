function getPoints() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "/api/crumbs", false);
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function initialize() {
  var testPoint = {lat: -25.363, lng: 131.044};
  var points = getPoints();
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: testPoint,
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  for (var count in points) {
    new google.maps.Marker({
      position: {lat: points[count].latitude, lng: points[count].longitude},
      map: map,
      title: points[count].trip
    });
  }

  var marker = new google.maps.Marker({
    position: testPoint,
    map: map,
    title: 'Test Point'
  });
}

// draw map
google.maps.event.addDomListener(window, 'load', initialize);
getPoints();