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


## Approach & Efficiency

### Lab16: Process of steps: require eventMngr. Create object of store information. Create 3 event.on methods. Create 3 event.emit methods. create methods for each event to adhere to requirements of lab. 

### Lab17:  


## API
<!-- Description of each method publicly available in each of your trees -->
