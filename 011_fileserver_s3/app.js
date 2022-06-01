const aws = require('aws-sdk')
const express = require('express');
const router = express.Router();
const path = require("path");
require('dotenv').config()

const app = express()
app.set("view engine", "ejs");

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION,
  })

let multer = require("multer");
let multerS3 = require('multer-s3');

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_DEFAULT_REGION,
        key: function (req, file, cb) {
            let extension = path.extname(file.originalname);
            cb(null, Date.now().toString() + extension)
        },
        acl: 'public-read-write',
    })

})
app.get("/", function (req, res) {
    res.render("upload");
});

app.post('/upload', upload.single("imgFile"), function (req, res, next) {
    console.log(req.file)
    res.send("complete");
})

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})