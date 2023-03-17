const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    ad:{
        type:String,
        required:true
    },
    soyad:{
        type:String,
        required:true
    },
    okulNo:{
        type:Number,
        required:true
    }
});

const student = mongoose.model('student',studentSchema);

module.exports =student;