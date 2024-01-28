import { Router } from "express";
import { generateToken } from '../libs/middelware/Token.midelware';
import { validateIncludesEmail, validateIncludesFkUser } from "../libs/middelware/ValidateData.middelware";
const router = Router();
router.post("/generateToken", validateIncludesEmail, validateIncludesFkUser, generateToken);
export default router;