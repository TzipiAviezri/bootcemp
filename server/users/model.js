const GetAll = require("./controllers");

const usersModel = {
  name: "users",
  model: {
    name: { require: true, type: String },
    pin: { require: true, type: String },
  },
  controllers: [GetAll],
};

module.exports = usersModel;
