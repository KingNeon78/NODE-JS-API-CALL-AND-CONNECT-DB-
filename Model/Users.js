const app = require("mongoose");

const Schema = app.Schema;


const User = new Schema({
  Name:{type : String},
  Email:{type : String},
  Phone:{type : String},
});

//const users= app.model("user",User);
module.exports = app.model("Users",User);

