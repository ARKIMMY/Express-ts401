import { Router } from 'express';
import productController from '../controller/product.controller';
const productRouter = Router();

// specifies the endpoint and the method to call
productRouter.get('/', productController.getAll);
// Endpoint to delete a product by ID
productRouter.delete("/:id", productController.deleteById);
// Endpoint to insert a new product
productRouter.post("/", productController.insertProduct);

// export the router
export default productRouter;
