const mongoose = require('mongoose');

let URL="mongodb://127.0.0.1:27017/test";

mongoose.connect(URL).then((Sucess) => {
    console.log("Sucessfully DATABASE Connected ");
})
.catch((err) => {
    console.log("Error",err);
})