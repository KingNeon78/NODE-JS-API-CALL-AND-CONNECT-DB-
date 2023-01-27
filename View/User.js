const express = require("express");
const router = express.Router();
const {UserInfo} = require("../Controller/user")
router.get("/UserInfo",UserInfo);
/* () => {
    console.log("i AM Using A Middleware ",UserInfo);
})*/
module.exports=router;