var https = require('https');
var firebase = require('firebase');
var FirebaseClient = require('firebase-client');

function now() {
  return Math.floor(Date.now() / 1000);
}

let endpoint;
let mapID = '3g38o3f2q9';

endpoint = new FirebaseClient({
  url: `https://live-valleymetro.firebaseio.com/maps`
});

setInterval(function() {

  var rest_options = {
    host: 'transitdata.phoenix.gov',
    port: 443,
    path: '/api/vehiclepositions?format=json',
    method: 'GET'
  };

  var request = https.request(rest_options, function(response) {
    var content = "";

    response.on('data', function(chunk) {
      content += chunk;
    });

    response.on('end', function() {
      console.log('updating...')
      var vehicles = JSON.parse(content);
      endpoint.set('', vehicles.entity); /*
      vehicles.entity.forEach(function(item) {
        endpoint.update(item.vehicle.vehicle.id, {
          coords: {
            latitude: item.vehicle.position.latitude,
            longitude: item.vehicle.position.longitude,
          },
          route: item.vehicle.trip.route_id,
          licensePlate: item.vehicle.vehicle.license_plate,
          speed: item.vehicle.position.speed,
          orientation: item.vehicle.position.bearing,
          timestamp: item.vehicle.timestamp
        })
      }); */
    });
  });

  // Report errors
  request.on('error', function(error) {
    console.log("Error while calling endpoint.", error);
  });

  request.end();
}, 1000);
