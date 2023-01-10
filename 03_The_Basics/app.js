const http = require('http')



const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>')
    res.write('Andrew')
    res.write('</h1>')
    res.write('</body>')
    res.write('</html>')
}); //Create a server 

server.listen(3000)