const { warning, throwError } = require("../console-message");
const { CMongooseModel } = require("../mongo");
const DefaultRoters = require("./default-roters");
const UsingControllersRouters = require("./using-controllers-routers");

const CManyRouters = (app, models) => {
  console.log(models)
  if (!models) throwError(`API must have models Array`);
  if (!models[0]) throwError(`API models mast be an Array`);
  models.map((x, i) => {
    if (!x.name) throwError(`models mast have a name! your ${i} model dosn't`);
       app.use(`/${x.name}`, COneRouter(x));
  });
};

const COneRouter = (model) => {
  if (!model.model)
    throwError(`models must have model! your ${model.name} model doesn't`);
  model.mongooseMOdel = CMongooseModel(model);
  if (
    (!model.routers && !model.controllers) ||
    (model.controllers && !model.controllers[0] && !model.routers) ||
    (model.routers && !model.routers[0] && !model.controllers) ||
    (model.routers &&
      !model.routers[0] &&
      model.controllers &&
      !model.controllers[0])
  ) {
    warning(`model ${model.name} use  default routers (defualt: GetAll, GetById, Add, Update, Delete, DeleteByid) and using defualt controllers`);
    model.routers = ["*"];
  }
  const router = require("express").Router();
  if (model.routers) DefaultRoters(router, model);
  if (model.controllers) UsingControllersRouters(router, model);
  return router;
};

module.exports = { CManyRouters, COneRouter };
