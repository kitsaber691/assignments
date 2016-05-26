$("document").ready(function () {
  'use strict';
  function googleMap() {
    var gMap = document.getElementsByTagName('main')[0], myCenter = {lat: 47.608, lng: -122.33}, mapProp = {
      center: {lat: 47.608, lng: -122.33},
      scrollwheel: true,
      zoom: 8
    }, marker = new google.maps.Marker({
      position: myCenter
    }), infoWindow = new google.maps.InfoWindow({
      content: 'UW PCE HQ'
    }), map = new google.maps.Map(gMap, mapProp);
    marker.setMap(map);
  }
});