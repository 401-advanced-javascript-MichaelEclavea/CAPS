
'use strict';

const ioClient = require('socket.io-client');

const client = ioClient('ws://localhost:3000');
const EE = require('events');
const eventMgr = new EE();


client.on('connect', () => {
  console.log('vendor connected');

  client.on('message', function (data) {
    console.log(data.event, data.payload.orderID);
    if (data.event === 'pickup') {
      handlePickup(data);
    }  
  });
});



function handlePickup(payload) {
  let data = { event: 'in-transit', payload: payload.payload };
  setTimeout(() => {
    client.emit('message', data)
  }, 1000);
  let data2 = { event: 'delivered', payload: payload.payload };
  setTimeout(() => {
    client.emit('message', data2)
  }, 3000);

}
