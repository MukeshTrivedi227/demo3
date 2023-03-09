import express from "express";
import {deleteProduct, 
    getProduct,
    getProducts,
    insertProducts,
    updateProduct,
    } from '../controllers/product.js'

const router = express.Router();

router.get("/:id", getProduct);
router.post("/",insertProducts);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;