import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Welll done!');
})

app.listen(3000,()=>{
    console.log("THe application is listening on port 3000!");
})