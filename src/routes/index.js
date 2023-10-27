import { Router } from "express";

import {ping} from'../controller/index.routes.js'
const router =Router();

router.get('/ping', ping);


export default router;