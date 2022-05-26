## websocket 구성

> yarn add express ws

## 서버 구성

<서버>  
WebSocketServer  
WebSocketServer.on("connection") : 접속 이벤트
WebSocketServer.on('close') : 닫기 이벤트
접속시 WebSocket을 파라미터로 받게됨  
ws.on("message") : 메세지가 왔을때의 이벤트
<클라>
WebSocket('ws://ip:port');
ws.onopen : 연결됐을때
ws.onmessage : 메세지가 왔을때
ws.onclose : 종료됐을때
근데 서버가 닫혔을때 종료 이벤트가 안옴

```
    var WebSocketServer = require("ws").Server,
    wss = new WebSocketServer({ port: 40510 });

    wss.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log("received: %s", message);
    });

    setInterval(() => ws.send(`${new Date()}`), 1000);
    });
```

## 클라 구성

```
    var ws = new WebSocket('ws://localhost:40510');

    ws.onopen = function () {
        console.log('websocket is connected ...')
        ws.send('connected')
    }

    ws.onmessage = function (ev) {
        console.log(ev);
    }
```
