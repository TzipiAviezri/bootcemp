//modelObjectParameters: name!:String model!:Object routers?(defalt: all): String[] controlers?:ControllerFunction[]

const itemsModel = require("./items/model");
const usersModel = require("./users/model");

//APIOBjectParameters: name?!:String models!:model appPort?(defulte: 8080):String dbURL!:String
const bootcempAPI1 = {
  name: "bootcemp1",
  models: [itemsModel],
  appPort: "8080",
  dbURL: "mongodb://localhost:27017/bootcemp",
};

module.exports =  bootcempAPI1;
