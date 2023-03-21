var express = require("express");
const { signout, signup } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

var router = express.Router();

router.post(
  "/signup",

  check("name")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 chars long"),

  check("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 chars long"),

  check("email").isEmail().withMessage("Email is required"),

  signup
);
router.get("/signout", signout);

module.exports = router;
