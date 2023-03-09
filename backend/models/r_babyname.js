import express from "express";
import {deleteBabyname,
    getBabyname, 
    getBabynames, 
    insertBabynames,
    updateBabyname,
   } from '../controllers/babyname.js'

const router = express.Router();

router.get("/:id", getBabyname);
router.post("/",insertBabynames);
router.delete("/:id", deleteBabyname);
router.get("/", getBabynames);
router.put("/:id", updateBabyname);

export default router;