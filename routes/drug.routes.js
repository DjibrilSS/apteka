const { Router } = require("express");
const { drugControllers } = require("../controllers/drug.controllers");
const router = Router();

router.post("/drug", drugControllers.addDrug);
router.get("/drug", drugControllers.getDrug);
router.patch("/drug/:id", drugControllers.updateDrug);
router.delete("/drug/:id", drugControllers.deleteDrug);

module.exports = router;
