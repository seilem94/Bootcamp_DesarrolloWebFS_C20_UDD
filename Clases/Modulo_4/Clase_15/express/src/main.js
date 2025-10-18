import express from 'express'; //ESS Module Syntax -> package.json "type": "module" para q funcione
//const express=require('express')  //CommonJs Syntax

const app = express();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});