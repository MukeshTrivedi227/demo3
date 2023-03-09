import express from "express";

import {
    deleteStudent,
    getStudent,
    getStudents,
    insertStudents,
    updateStudent
} from '../Controllers/students.js'

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", insertStudents);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);

export default router;