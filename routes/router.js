const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');

router.get('/', hp.nom);              
router.get('/about', hp.about);       
router.get('/contact', hp.contact);  

router.get('/address', hp.address);
router.get('/lans', hp.lans);
module.exports = router;
