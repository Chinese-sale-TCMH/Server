const router =require("express").Router();
const productController=require("../controlers/product");

router.get("",productController.getAllProducts);
router.post("",productController.addProduct);
router.delete("/:id",productController.deleteProduc);
router.get("/:id",productController.findProductById);

module.exports=router;