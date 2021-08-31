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
  
  await Profile.create({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    description:req.body.description,
    gender:req.body.gender,
    birthDate:req.body.birthDate,
    phoneNumber:req.body.phoneNumber,
    address:req.body.address,
    isAvailable:req.body.isAvailable,
    availability:req.body.description,
  })
   res.status(201).json({message:"created!"})
})

// @route POST /profile/:_id
// @desc create a profile
// @access Private

exports.findProfileById = asyncHandler(async (req, res, next) => {
  let _id=req.user.id;
  let profile=await Profile.findOne({userId:_id})
  console.log("current user profile is ",profile)
  res.status(200).json({
    success:{profile}
  })
})

// @route PUT /profile/:_id
// @desc update a profile
// @access Private

exports.updateProfileById = asyncHandler(async (req, res, next) => {
  let _id=req.user.id;
  console.log("req.body",req.body)
   await Profile.findOneAndUpdate({userId:_id},{
    $set:req.body
  })
  const updatedProfile=await Profile.findOne({userId:_id})
  res.status(200).json({success:{profile:updatedProfile}})
})
