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

app.listen(port, function(err){
  if (err){
    console.log(err);
  }
  else{
    open('http://localhost:' + port);
  }
});
