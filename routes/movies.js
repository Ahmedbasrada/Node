const express = require("express");
const router = express.Router();
const controller = require("../controllers/moviesControler");
const auth = require("../middelware/auth");
const admin = require("../middelware/admin");



router.post("/",[auth.check, admin.check], controller.create);
router.put("/:id",[auth.check, admin.check], controller.update);
router.delete("/:id",[auth.check, admin.check], controller.delete);

router.get("/",auth.check, controller.list);
router.get("/:id",auth.check, controller.find);


router.post("/:id/reviews",auth.check, controller.addReviews);
router.get("/:id/reviews",auth.check, controller.reviews);


module.exports = router;
