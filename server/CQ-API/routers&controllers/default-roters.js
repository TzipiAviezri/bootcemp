const { throwError } = require("../console-message");
const {
  GetAllController,
  GetByIdController,
  AddController,
  UpdateController,
  DeleteController,
  DeleteByIdController,
} = require("./default-controllers");

const CDefaultRoters = (router, model) => {
  model.routers.map((x) => {
    if (!typeof x === String)
      throwError(
        `type of routers paramets mast be String, your ${model.name} have one that is doesn't`
      );
    switch (x.toUpperCase()) {
      /* get all */
      case "GETALL":
      case "*":
      case "#":
        router.get("/", (req, res) => {
          GetAllController(req, res, model);
        });
      /* get by id */
      case "GETBYID":
      case "*":
      case "#":
        router.get("/:id", (req, res) => {
          GetByIdController(req, res, model);
        });
      /* add */
      case "ADD":
      case "*":
      case "#":
        router.post("/", (req, res) => {
          AddController(req, res, model);
        });
      /* updete */
      case "UPDATE" :
        case "*":
        case "#":
        router.put("/:id", (req, res) => {
          UpdateController(req, res, model);
        });
      /* delete */
      case "DELETE" :
        case "*":
        case "#":
        router.delete("/", (req, res) => {
          DeleteController(req, res, model);
        });
      /* delete by id*/
      case "DELETEBYID" :
        case "*":
        case "#":
        router.delete("/:id", (req, res) => {
          DeleteByIdController(req, res, model);
        });
        break;
      default: //לא יכול להיות מוגדר כראוטר
        throwError(`${x} doesn't can definde like router`);
        break;
    }
  });
};

module.exports =  CDefaultRoters 