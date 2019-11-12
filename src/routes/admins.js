const express = require('express');
const router= express.Router();
const adminController=require('../controllers/adminController');

router.get('/',adminController.list);
router.post('/add', adminController.save);
router.get('/delete/:adminId',adminController.delete);
router.get('/update/:adminId',adminController.edit);

router.post('/update/:adminId',adminController.update);

module.exports=router;