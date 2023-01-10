const http = require('http')



const server = http.createServer(function(req, res){
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<head>')
        res.write('</head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
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
    res.end()
}); //Create a server 

server.listen(3000)