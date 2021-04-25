const Router = require("express");
const router = new Router();
const rowController = require("../controllers/row.controller");

router.post("/create-row", rowController.createRow);
router.get("/rows", rowController.getRows);
router.get("/row/:id", rowController.getOneRow);
router.get("/row/name/:name", rowController.getRowByName);
router.get("/rows/amount/:operator/:amount", rowController.getRowByAmount);
router.get("/rows/distance/:operator/:distance", rowController.getRowByDistance);
router.put("/row", rowController.updateRow);
router.delete("/row/:id", rowController.deleteRow);

module.exports = router;
