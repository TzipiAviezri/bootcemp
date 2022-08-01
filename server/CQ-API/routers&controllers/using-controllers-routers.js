aconst { throwError } = require("../console-message");

const UsingControllersRouters = (router, model) => {
  model.controllers.map((x) => {
    if (!(typeof x === typeof Function))
      throwError(
        `type of controllers paramets mast be Function, your ${model.name} model have one that is doesn't`
      );
    switch (x.name.toUpperCase()) {
      /* get all */
      case "GETALL":
        router.get("/", (req, res) => {
          x(req, res, model);
        });
        break;
      /* get by id */
      case "GETBYID":
        router.get("/:id", (req, res) => {
          x(req, res, model);
        });
        break;
      /* add */
      case "ADD":
        router.post("/", (req, res) => {
          x(req, res, model);
        });
        break;
      /* updete */
      case "UPDATE":
        router.put("/:id", (req, res) => {
          x(req, res, model);
        });
        break;
      /* delete */
      case "DELETE":
        router.delete("/", (req, res) => {
          x(req, res, model);
        });
        break;
      /* delete by id*/
      case "DELETEBYID":
        router.delete("/:id", (req, res) => {
          x(req, res, model);
        });
        break;
      default:
        throwError(`${x} doesn't can definde like router`);//לא יכול להיות מוגדר כראוטר
        break;
    }
  });
};

module.exports = UsingControllersRouters;
