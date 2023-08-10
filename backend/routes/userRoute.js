const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authJWT");

const { signup, signin } = require("../controllers/authController.js");

router.route("/register").post(signup);
router.post("/login", signin, function (req, res) {});

router.get("/roles_testing", verifyToken, function (req, res) {
  //console.log(req.user);
  if (!req.user) {
    res.status(403).send({
      message: "Invalid JWT token",
    });
  } else if (req.user.role == "admin") {
    res.status(200).send({
      message: "admin user privillages",
    });
  } else if (req.user.role == "normal") {
    res.status(200).send({
      message: "normal user privillages",
    });
  } else {
    res.status(403).send({
      message: "Unauthorised access",
    });
  }
});

module.exports = router;
