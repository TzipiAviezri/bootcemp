const { throwError } = require("./console-message");
const {  COneRouter } = require("./routers&controllers/routers");

const CExpressApp = (api) => {
  if (!api) throwError(`api א"א ליצור אפליקציית אספררס בלי לספק  `);
  const express = require("express");
  const app = express();
  const cors = require("cors");
  const bodyParser = require("body-parser");
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
  if (!api.name) api.name = "";
  const PORT = process.env.PORT || api.port || "8080";
  app.listen(PORT, () => {
    console.log(
      `server run on: http://localhost:${PORT}/${api.name}`
    );
  });
  if (api.models) {
    if (!api.models[0]) ThrowError(`API models mast be an Array`);
    api.models.map((x, i) => {
      if (!x.name) ThrowError(`models mast have a name! your ${i} model dosn't`);
      app.use(`/${api.name}/${x.name}`, COneRouter(x));
    });
  }
  app.get(`/${api.name}`, (req, res) => {
    res.json({ message: ` Hello from ${api.name} server!`});
  });
  return app
};

module.exports = { CExpressApp };
