const express = require("express");
const verifyToken = require("../middleware/authJWT");
const router = express.Router();

const {
  grantAccess,
  retrieveAllAccess,
  retrieveAccess,
  deleteAccessEntry,
  updatAccessEntry
} = require("../controllers/accessController");

router.route("/").get(retrieveAllAccess).post(grantAccess);
router.route("/:id").get(retrieveAccess).delete(deleteAccessEntry).put(updatAccessEntry).patch(updatAccessEntry);

module.exports = router;
