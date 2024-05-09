const express = require("express");
const router = express.Router();
const controller = require("../controllers/watchListControler");
const auth = require("../middelware/auth");


router.post("/",auth.check,  controller.add);
router.delete("/:movie",auth.check, controller.delete);
router.get("/", auth.check, controller.list);

module.exports = router;
