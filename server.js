const express = require('express');
const consign = require('consign');

const app = express();

consign()
.include('configs/db.js')
.then('controllers')
.then('configs/boot.js')
.into(app)