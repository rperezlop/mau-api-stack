const  express = require('express');
const cors =  require('cors');
const multer = require('multer');
const { application } = require('express');
const path = require("path");


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, '../public')
    },

    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }

})

const updload = multer({storage})
app.post('/public',updload.single('file'), (req, res) => {
    res.send({data: 'imagen todo ben'})
})
module.exports = {updload};