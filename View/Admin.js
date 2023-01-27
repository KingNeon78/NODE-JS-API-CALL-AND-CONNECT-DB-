const express = require("express");
const router = express.Router();
const {adminInfo, Adminsalary} = require('../Controller/admin');
router.use('/AdminInfo', adminInfo);
router.use('/Adminsalary', Adminsalary);
module.exports=router;