# CAPS

## Requirements:

### Lab16: We need to create an event manager that contains 3 function.
 - 1st function: to display the event of a package being picked up and display object  with the time of package pickup. 
 - 2nd function: to display the package in transit, with the same object being logged. 
 - 3rd function: to log the same object of information and a thank you from the vendor.

### Lab17: 
- Creates a pool of connected clients
- Accept inbound TCP connections on a declared port
- On new connections, add the client to the connection pool
- On incoming data from a client
- Read and parse the incoming data/payload
- Verify that the data is legitimate
- Is it a JSON object with both an event and payload properties?
- If the payload is ok, broadcast the raw data back out to each of the other connected clients

### Lab18: 
- Start a socket.io server on a designated port
- pickup, in-transit, delivered
- Broadcast the events and payload back out to the appropriate clients in the caps  namespace
- pickup can go out to all sockets (broadcast it) so that the drivers can hear it
  in-transit and delivered are meant to be heard only by the right vendor
- Emit those messages and payload only to the room (vendor) for which the message was  intended



## Approach & Efficiency

### Lab16:
- Process of steps: require eventMngr. Create object of store information. Create 3 event.on methods. Create 3 event.emit methods. create methods for each event to adhere to requirements of lab. 

### Lab17:  
- build out server the server, vendor and driver javascript files.
- create package.json files
- connect all of the pages to the same port
- send data to the server from vendor and driver
- have the server send back data to vendor and driver

### Lab18:
- bring in socket io
- require and link socket io to server
- change the net to socket io
- relink the io emits and on's 

## UML

[whiteBoard](./uml/IMG_9042.jpeg)
