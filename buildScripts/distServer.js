//var express = require ('express');
import express from 'express';
//var path = require('path');
import path from 'path';
//var open = require('open');
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console*/
//var port = 3000
const port = 3000;
//var app = express();
const app=express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users',function(req,res){
  res.json([
    {'id': 1, "firstName": "Bob","lastName": "Smith","email": "bob@gmail.com"},
    {'id': 2, "firstName": "Dan","lastName": "Scott","email": "dan@gmail.com"},
    {'id': 3, "firstName": "Ian","lastName": "Steve","email": "ian@gmail.com"},
    {'id': 4, "firstName": "Ben","lastName": "Myers","email": "ben@gmail.com"},
  ]);
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }
  else{
    open('http://localhost:' + port);
  }
});
