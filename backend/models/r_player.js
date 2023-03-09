import express from "express";
import {deletePlayer,  
    getPlayer, 
    insertPlayers,
    updatePlayer,
   getPlayers,
    } from '../controllers/player.js'

const router = express.Router();

router.get("/:id", getPlayer);
router.post("/",insertPlayers);
router.delete("/:id", deletePlayer);
router.get("/", getPlayers);
router.put("/:id", updatePlayer);

export default router;