module.exports.adminInfo = (req,res) => {
    const data={
        Name: "Gulam Jilani",
        Mobile: "9971772125",
        Date_of_Birth :"05-07-2001",
        Higher_Education : " Ethical hacker",
        Job_profile : " Hacker",
        father_Name :" Zaheer Ahmad"
    };
    console.log("data",data);
    res.send(data);
}

module.exports.Adminsalary = (req,res) => {
    const data = {
        Salary : "95000"
    };
    console.log("data", data);
    res.send(data);

}