const SequelizeAuto = require('sequelize-auto'); 
const auto = new SequelizeAuto("test", "test", "test", { 
    host: "ohdev.xyz", port: "3306", dialect: "mysql", 
    //noAlias: true // as 별칭 미설정 여부 
}); 
auto.run((err)=>{ 
    if(err) throw err; 
})
