const User= require("../Model/Users");

module.exports.UserInfo = async(req, res) => {
   const data = {
    Name: "Gulam Jilani",
    Email:"gulamjilani@livfashionwear.com",
    Phone:"9971772125",
   };
   // Need to create an Api for save 

  let userInstance = new User(data);
  let savedData = await userInstance.save();
  res.send(savedData);
};

