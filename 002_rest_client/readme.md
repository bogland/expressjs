### nodemon

働舛 督析 痕井 姶走 板 仙 叔楳

> yarn add nodemon

```
  "scripts": {
    "start": "nodemon --watch index.js"
  }
```

### rest client extension

誤敬嬢澗 ###生稽 虞昔 姥歳
POST 劾険凶 content-type: application/json 神展 爽税  
POST 劾険凶 header 焼掘稽 廃匝 句嬢床壱 body 誤獣

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

### bodyparser request税 body研 json生稽 幻級嬢捜

```
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

### middleware

app.use : 嬢巴軒追戚芝 傾婚  
app.get : 虞酔斗 傾婚  
嬢巴軒追戚芝戚 希 察軒 叔楳喫

```
app.use('/',(req,res,next)=>{
    console.log("ぞしぞし");
    // req.id=1;
    next();
})

app.get('/:id',(req,res)=>{
    console.log("ぞしぞし2")
    res.send(req.params);
    console.log(req.id);
})
```

### next

耕級裾嬢雌拭辞 坦軒板 陥製 坦軒稽 角移捜  
next("/member") URL走舛拝 呪亀 赤製

### callback

callback聖 壕伸 箸精 爪原稽 走舛馬檎 授託旋生稽 坦軒, next()坦軒 琶推

```
const cb1 = function (req, res, next) {
console.log('CB1')
next()
}
app.get('/example/c', [cb0, cb1],(req,res)=>{
    res.send("ぞしぞし");
})
```
