// 

import { Router } from "express";
import { verifyToken } from '../libs/middelware/Token.midelware';
import { regfields } from "../controller/customer.controller";
const router = Router();
router.post("/registration/regfields", verifyToken, regfields);
export default router;