const fs = require('fs')

const requestHandles = (req, res) =>{
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<head>')
        res.write('</head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">dasdasd</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) =>{
            body.push(chunk)
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();

            const message = parsedBody.split('=')[1]

            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                
            });
        })
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
    return res.end()   
}
module.exports = requestHandles

