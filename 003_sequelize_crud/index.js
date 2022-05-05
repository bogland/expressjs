express = require("express");
bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require("./app/models");
db.sequelize.sync();
app.db = db;

app.use("/member",require("./app/routes/member.routes.js"))

app.get("/",(req,res)=>{
    console.log(db);
    res.send("hello world");

})

app.listen(5000)

module.exports = app;