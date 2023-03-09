import express from "express";
import {deleteTeacher,
    getTeacher,
    getTeachers,
    insertTeachers,
    updateTeacher} from '../controllers/teachers.js'

const router = express.Router();

router.get("/:id", getTeacher);
router.post("/",insertTeachers);
router.delete("/:id", deleteTeacher);
router.get("/", getTeachers);
router.put("/:id", updateTeacher);

export default router;