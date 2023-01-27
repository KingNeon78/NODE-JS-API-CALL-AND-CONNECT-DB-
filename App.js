const GulamJilani = require("express");
const MainServer = GulamJilani();
// file import
const UserRT= require("./View/User");
const AdminRT= require("./View/Admin");
const Database =require("./Database/Index");
//middle ware 
MainServer.use("/Userkroutpr", UserRT );
MainServer.use("/Adminkroutpr", AdminRT);
MainServer.listen(3000, () => {
    console.log("Server running ");
})