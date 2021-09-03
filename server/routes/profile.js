const express = require('express');
const router = express.Router();
const protect =require("../middleware/auth")
const {createProfile,findProfileById,updateProfileById,findAllProfiles}=require("../controllers/profile")

router.route("/create").post(protect,createProfile)

router.route("/all").get(protect,findAllProfiles)

router.route("/").get(protect,findProfileById).put(protect,updateProfileById)




module.exports = router;