const { CExpressApp } = require("./express");
const { CMomgoDB } = require("./mongo");

const CQExpressMomgoAPI = (api) => {
  const app = CExpressApp(api);
  // const express = require("express");
  // app.use(express.static(path.resolve(__dirname, "../../client/build")));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  // });
  CMomgoDB(api.dbURL);
};

module.exports = CQExpressMomgoAPI;
