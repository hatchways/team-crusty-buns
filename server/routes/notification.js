const express = require('express');
const router = express.Router();
const protect =require("../middleware/auth")
const {createNewNotification,dismissNotification, fetchAllNotifications, fetchAllUnreadNotifications}=require("../controllers/notification")

router.route("/all").get(protect,fetchAllNotifications)

router.route("/unread").get(protect,fetchAllUnreadNotifications)

router.route("/create").post(protect,createNewNotification)

router.route("/dismiss/:id").get(protect,dismissNotification)


module.exports = router;