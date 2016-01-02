function initialize() {
  var testPoint = {lat: -25.363, lng: 131.044};
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: testPoint,
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: testPoint,
    map: map,
    title: 'Test Point'
  });
}

// draw map
google.maps.event.addDomListener(window, 'load', initialize);