
// burada mongo db bilgisayara yüklemeden  mongo db atlas kullanıp basit bir şema hazırlayıp verileri gönderdi

// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//     ad:{
//         type:String,
//         required:true
//     },
//     soyad:{
//         type:String,
//         required:true
//     },
//     okulNo:{
//         type:Number,
//         required:true
//     }
// });

// const student = mongoose.model('student',studentSchema);

// module.exports =student;




// const {MongoClient} = require('mongodb');

// let dbConnection;

// module.exports={

//     connectToDb:(cb)=>{
//             MongoClient.connect('mongodb://localhost:27017/okul')
//             .then((client)=>{
//                 dbConnection=client.db()
//                 return cb()
//             })
//             .catch(err=>{
//                 console.log("veri tabanı bağlanırken hata oluştu")
//                 return cb(err)
//             })

//     },
//     getDb:()=>dbConnection
// }