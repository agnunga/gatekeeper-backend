const express = require("express");
const Gatekeeper = require("../models/gatekeeperModel").default;
const router = express.Router();
const {
  createGatekeeper,
  getGatekeepers,
  getGatekeeper,
  deleteGatekeeper,
  updateGatekeeper,
} = require("../controllers/gatekeeperController");

router.route("/").get(getGatekeepers).post(createGatekeeper);
router.route("/:id").get(getGatekeeper).delete(deleteGatekeeper).put(updateGatekeeper).patch(updateGatekeeper);

module.exports = router;
  