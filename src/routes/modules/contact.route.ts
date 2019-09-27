const router = require( "express-promise-router" )();

import ContactController from "../../controllers/contact.controller";

router.get( "/", ContactController.index );
router.post( "/", ContactController.create );
router.patch( "/", ContactController.update );
router.delete( "/", ContactController.delete );

export default router;