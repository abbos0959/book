const express = require("express");
const Kit=require("../Controller/KItobController")

const KitobRouter = express.Router();


KitobRouter.get("/",Kit.getAllKitob)
KitobRouter.get("/:id",Kit.getAllKitobById)
KitobRouter.post("/add",Kit.AddKitob)
KitobRouter.put("/:id",Kit.UpdateKitob)
KitobRouter.delete("/:id",Kit.DeleteKitob)


module.exports = KitobRouter;
