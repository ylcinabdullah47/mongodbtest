const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const server = express();
const student = require('./mongodb.js')
//buraya mongo db için bağlantı girelim


// const client = mongodb.MongoClient
// client.connect('mongodb://localhost:27017',(err,db)=>{
//     console.log('err',err)
//     console.log('db',db)
//     db.db('egitimdb')
// });
const db = mongoose.connection.useDb('deneme1');
const yeniOgrenci = new student({
    ad: 'Ali',
    soyad: 'Yılmaz',
    okulNo: '12345'
  });
  
  yeniOgrenci.save()
  .then(() => {
    console.log('Yeni öğrenci kaydedildi!');
  })
  .catch((err) => {
    console.error(err);
  });


  const urldb = 'mongodb+srv://root:mongodb47@cluster0.v8w3m6n.mongodb.net/?retryWrites=true&w=majority';
  mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch(err => console.error(err));







  server.get('/',(req,res)=>{
    res.send('bağlantı oldu')
  });

server.listen(2500,()=>{
   
    console.log("2500 portu çalışıyor");
});