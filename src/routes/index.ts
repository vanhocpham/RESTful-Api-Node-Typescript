import { Router } from "express";

import contact from "./modules/contact.route";

const router = Router();


// *change here to address routes*
router.use( "/contact", contact );

export default router;