import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authcontroller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// rouuting
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);
router.get("/user-auth", requireSignIn, (req,res) => {res.status(200).send({ok:true})});

export default router;
