// Peripheral

console.log("Peripheral Ready")

// ----------------------------------------- 
// |    Fields
// ----------------------------------------- 

const bleno = require('bleno');

const peripheral_uuid= '00000000-0000-0000-0000-000000000000'

// ----------------------------------------- 
// |    Initialization
// ----------------------------------------- 

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);
  if (state === 'poweredOn') {
      advertise()
  }  else {
    console.log("doesn't have power")
  }
});

bleno.on('advertisingStart', function(error) {
  if (error) { 
    console.log ("err: ",error)
  }else{
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));
  }
});

bleno.on('accept', function(clientAddress) {
    console.log("Accepted connection from: " + clientAddress);
});

bleno.on('disconnect', function(clientAddress) {
    console.log("Disconnected from: " + clientAddress);
});

// ----------------------------------------- 
// |    Functions
// ----------------------------------------- 

function advertise(){
  bleno.startAdvertising("Android RPi BLE Tutorial", [pizzaService.uuid], function(err) {
      if (err) {
        console.log(err);
      }
    });
}

