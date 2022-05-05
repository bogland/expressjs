const express = require("express")
const route = express.Router()
const Member = require("../models").member;

route.get("/:id",async (req,res)=>{
    const resMember = await Member.findByPk(req.params.id);
    const memberInfo = resMember;
    res.send(memberInfo);
})
route.post("/create",async (req,res)=>{
    console.log(req.body);
    const result = await Member.create({
        name:req.body.name
    })
    console.log(result);
    res.send("member create 성공")
})

route.put("/update",async (req,res)=>{
    console.log(req.body);
    await Member.update({ name: req.body.name }, {
        where: {
          id: req.body.id,
        }})
    res.send("member update 성공")
})

route.delete("/delete/:id",async (req,res)=>{
    console.log(req.body);
    await Member.destroy({
        where: {
          id: req.params.id
        }
      });
    res.send("member delete 성공")
})

module.exports = route;