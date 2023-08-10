const express = require("express");
verifyToken = require("../middleware/authJWT");
const router = express.Router();
const {
  createGatekeeper,
  getGatekeepers,
  getGatekeeper,
  deleteGatekeeper,
  updateGatekeeper,
} = require("../controllers/gatekeeperController");

router.route("/").get(verifyToken, getGatekeepers).post(verifyToken, createGatekeeper);
router.route("/:id").get(getGatekeeper).delete(deleteGatekeeper).put(updateGatekeeper).patch(updateGatekeeper);

module.exports = router;
