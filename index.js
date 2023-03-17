const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const server = express();
const student = require('./mongodb.js')

const db = mongoose.connection.useDb('deneme1');

// server.get('/listele',(req,res)=>{
//     res.send("test")

//     const yeniOgrenci = new student({
//         ad: 'Ali',
//         soyad: 'Yılaaaaamaz',
//         okulNo: '12345'
//       });
      
//       yeniOgrenci.save()
//       .then(() => {
//         console.log('Yeni öğrenci kaydedildi!');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
// });

server.get('/listele',async (req,res) =>{
    try {
        const yeniOgrenci=new student(
            {
                ad:'abdullah',
                soyad:'yalçın',
                okulNo:'12347'
            });

            await yeniOgrenci.save();
            console.log('yeni öğrenci kayıt edildi');
            res.send('kayıt başarılı')
    } catch (error) {
        console.log(error)
            res.status(500).send('kayıt oluşurken hata oldu tekrar dene')
        
        
    }
});



  const urldb = 'mongodb+srv://root:mongodb47@cluster0.v8w3m6n.mongodb.net/deneme1?retryWrites=true&w=majority';
  mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch(err => console.error(err));







  server.get('/',(req,res)=>{
    res.send('bağlantı oldu')
  });

server.listen(2500,()=>{
   
    console.log("2500 portu çalışıyor");
});