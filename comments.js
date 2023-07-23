// Create web server for comment using express framework 
// =======================================================
var express = require('express');
var router = express.Router(); //continue generating routes
var Comment = require('../models/comment');
var Post = require('../models/post');

