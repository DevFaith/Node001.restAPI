const http = require("http")


const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })

        res.end(JSON.stringify(products))
    } else {
        res.writeHead(404, {
            'Content-type': 'application/json'
        })

        res.end(JSON.stringify({ message: 'Route not found' }))
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
