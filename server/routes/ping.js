const express = require("express");
const router = express.Router();
const { ping } = require("../controllers/ping");

router.route("/").post(ping);

module.exports = router;
