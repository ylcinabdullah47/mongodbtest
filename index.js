// const express = require('express');
// const mongodb = require('mongodb');
// const mongoose = require('mongoose');
// const server = express();

// // const { MongoClient }= require('mongodb');
// const uri = 'mongodb://localhost:27017/okul';
// const client = new mongodb(uri, { useNewUrlParser: true, useUnifiedTopology: true });





// // const MongoClient = require('mongodb').MongoClient;





// // const {connectToDb,getDb} = require('./mongodb')

// // const db = mongoose.connection.useDb('deneme1');

// // server.get('/listele',(req,res)=>{
// //     res.send("test")

// //     const yeniOgrenci = new student({
// //         ad: 'Ali',
// //         soyad: 'Yılaaaaamaz',
// //         okulNo: '12345'
// //       });
      
// //       yeniOgrenci.save()
// //       .then(() => {
// //         console.log('Yeni öğrenci kaydedildi!');
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// // });




// // server.get('/listele',async (req,res) =>{
// //     try {
// //         const yeniOgrenci=new student(
// //             {
// //                 ad:'abdullah',
// //                 soyad:'yalçı47474747n',
// //                 okulNo:'12347'
// //             }
// //             // {
// //             //     ad:'mhemt',
// //             //     soyad:'yalçın',
// //             //     okulNo:'4484848'
// //             // }
            
            
            
// //             );

// //             await yeniOgrenci.save();
// //             console.log('yeni öğrenci kayıt edildi');
// //             res.send('kayıt başarılı')
// //     } catch (error) {
// //         console.log(error)
// //             res.status(500).send('kayıt oluşurken hata oldu tekrar dene')
        
        
// //     }
// // });

// // bu kısımda mongodb atlas bağlantı kurduk

// //   const urldb = 'mongodb+srv://root:mongodb47@cluster0.v8w3m6n.mongodb.net/deneme1?retryWrites=true&w=majority';
// //   mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('MongoDB bağlantısı başarılı!'))
// //   .catch(err => console.error(err));



// // burası hatalı çalışıyor 
// // let db;

// // connectToDb((err)=>{
// //     if (!err) {
// //         server.listen(2500,()=>{
   
// //             console.log("2500 portu çalışıyor")
// //         })
// //         db=getDb()
// //     }
// // })

// // const url = 'mongodb://localhost:27017';
// // const dbName ='okul';

// // server.get('/',async (req,res)=>{
// //     const client = await MongoClient.connect(url,{useNewUrlParser:true});
// //     const db =client.db(dbName);
    
// // BURADA BASİTÇE VERİTABANI BAĞLANTISI OLUP OLMADIĞINI KONTROL EDİYORUZ


// async function connectToDb(){
//     try {
//         await client.connect();
//         console.log("veri tabanı bağlantısı başarılı");
//     } catch (error) {
//         console.log("veri tabanı bağlantısı başarısız");
//     }finally{
//         //client.close();
//     }
// }

// connectToDb();








// server.listen(2500,(req,res)=>{
//     console.log("2500 portu başarılı çalışıyor");
// })











const express = require('express');
const mongodb = require('mongodb');
const server = express();

const uri = 'mongodb://localhost:27017/okul';
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function connectToDb(){
    try {
        await client.connect();
        console.log("veri tabanı bağlantısı başarılı");
    } catch (error) {
        console.log("veri tabanı bağlantısı başarısız");
    }
}

connectToDb();

server.listen(2500,(req,res)=>{
    console.log("2500 portu başarılı çalışıyor");
})
