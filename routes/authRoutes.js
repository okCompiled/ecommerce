import express from "express";
import { registerController } from "../controllers/authcontroller";
// router object
const router = express.Router();

// rouuting
// REGISTER || METHOD POST
router.post("/register", registerController);

export default router;
