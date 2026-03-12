import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { registerValidationRules } from "../validators/auth.validator";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password, confirmPassword }
 */

authRouter.post("/register", registerValidationRules(), register);


export default authRouter;