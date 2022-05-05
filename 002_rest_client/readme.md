### nodemon

특정 파일 변경 감지 후 재 실행

> yarn add nodemon

```
  "scripts": {
    "start": "nodemon --watch index.js"
  }
```

### rest client extension

명령어는 ###으로 라인 구분
POST 날릴때 content-type: application/json 오타 주의  
POST 날릴때 header 아래로 한줄 띄어쓰고 body 명시

```
###
http://localhost:5000/1

###
POST http://localhost:5000
content-type: application/json

{
    "id":"1",
    "name":"hihi"
}
```

### bodyparser request의 body를 json으로 만들어줌

```
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

### middleware

app.use : 어플리케이션 레벨  
app.get : 라우터 레벨  
어플리케이션이 더 빨리 실행됨

```
app.use('/',(req,res,next)=>{
    console.log("ㅎㅇㅎㅇ");
    // req.id=1;
    next();
})

app.get('/:id',(req,res)=>{
    console.log("ㅎㅇㅎㅇ2")
    res.send(req.params);
    console.log(req.id);
})
```

### next

미들웨어상에서 처리후 다음 처리로 넘겨줌  
next("/member") URL지정할 수도 있음

### callback

callback을 배열 혹은 콤마로 지정하면 순차적으로 처리, next()처리 필요

```
const cb1 = function (req, res, next) {
console.log('CB1')
next()
}
app.get('/example/c', [cb0, cb1],(req,res)=>{
    res.send("ㅎㅇㅎㅇ");
})
```
