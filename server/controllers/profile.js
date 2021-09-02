const Profile= require("../models/Profile");
const asyncHandler = require("express-async-handler");



// @route PUT /profile/all
// @desc find all profiles
// @access Private

exports.findAllProfiles= asyncHandler(async (req, res, next) => {
  let profiles=await Profile.find()
  res.status(200).json({
    success:{profiles}
  })
})

// @route POST /profile/create
// @desc create a profile
// @access Private

exports.createProfile = asyncHandler(async (req, res, next) => {
  const {firstName,lastName,description,gender,birthDate,phoneNumber,isAvailable,availability}=req.body
  await Profile.create({
    firstName:firstName,
    lastName:lastName,
    description:description,
    gender:gender,
    birthDate:birthDate,
    phoneNumber:phoneNumber,
    address:address,
    isAvailable:isAvailable,
    availability:availability,
  })
   res.status(201).json({message:"created!"})
})

// @route POST /profile/:_id
// @desc create a profile
// @access Private

exports.findProfileById = asyncHandler(async (req, res, next) => {
  let _id=req.user.id;
  let profile=await Profile.findOne({userId:_id})
  res.status(200).json({
    success:{profile}
  })
})

// @route PUT /profile/:_id
// @desc update a profile
// @access Private

exports.updateProfileById = asyncHandler(async (req, res, next) => {
  let id=req.user.id;
   await Profile.findOneAndUpdate({userId:id},{
    $set:req.body
  })
  const updatedProfile=await Profile.findOne({userId:id})
  res.status(200).json({success:{profile:updatedProfile}})
})
