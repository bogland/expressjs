### nodemon

Ư�� ���� ���� ���� �� �� ����

> yarn add nodemon

```
  "scripts": {
    "start": "nodemon --watch index.js"
  }
```

### rest client extension

��ɾ�� ###���� ���� ����
POST ������ content-type: application/json ��Ÿ ����  
POST ������ header �Ʒ��� ���� ���� body ���

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

### bodyparser request�� body�� json���� �������

```
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

### middleware

app.use : ���ø����̼� ����  
app.get : ����� ����  
���ø����̼��� �� ���� �����

```
app.use('/',(req,res,next)=>{
    console.log("��������");
    // req.id=1;
    next();
})

app.get('/:id',(req,res)=>{
    console.log("��������2")
    res.send(req.params);
    console.log(req.id);
})
```

### next

�̵����󿡼� ó���� ���� ó���� �Ѱ���  
next("/member") URL������ ���� ����

### callback

callback�� �迭 Ȥ�� �޸��� �����ϸ� ���������� ó��, next()ó�� �ʿ�

```
const cb1 = function (req, res, next) {
console.log('CB1')
next()
}
app.get('/example/c', [cb0, cb1],(req,res)=>{
    res.send("��������");
})
```
