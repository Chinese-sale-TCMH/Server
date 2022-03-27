const router = require("express").Router();
const userController=require("../controlers/user");

router.post("",userController.addUser);
router.get("/:id", userController.allProductByUserId);
router.post("",userController.addOrders);

module.exports = router;