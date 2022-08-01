const { throwError } = require("./console-message");

const CMomgoDB = (dbURL) => {
  if (!dbURL) throwError(`api mast have dbURL parameter`)
  const mongoose = require("mongoose");
  mongoose.connect(dbURL);
  const db = mongoose.connection;
  db.on("open", () => {
    console.log(`db open: ${dbURL}`);
  });
};
const CMongooseModel = (model) => {
  const mongoose = require("mongoose");
  const schema = mongoose.Schema(model.model);
  return mongoose.model(model.name, schema);
};

module.exports = { CMongooseModel , CMomgoDB };
