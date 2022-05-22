const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
}
let clients = [];

app.get('/sse', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);
    const data = "hello";
    
    res.write(`${JSON.stringify(data)}\n\n`);

    const clientId = Date.now();
    const newClient = {
      id: clientId,
      res
    };
    clients.push(newClient);

    clients.forEach(client =>
        client.res.write(`data: ${JSON.stringify(data)}\n\n`)
    );

    req.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clients = clients.filter(client => client.id !== clientId);
    })
})

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

