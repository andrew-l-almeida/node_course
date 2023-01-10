
/**core modules
 * http -> launch a server, send requests
 * https -> launch a SSL server
 * fs
 * path
 * os
 */

const http = require('http')



const server = http.createServer(function(req, res){
    console.log(req)
}); //Create a server 

server.listen(3000)