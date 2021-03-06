
'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact')


router.get('/', function(req,res){
	Contact.find(function(err, contacts){
		res.render('add', {title: 'My Contacts!', items: contacts})
	});
});

router.post('/', function(req,res){
	var contact = req.body;
	Contact.create(contact, function(err){
		res.status(err ? 400 : 200).send(err || 'contact created');
	})
})
module.exports = router;
