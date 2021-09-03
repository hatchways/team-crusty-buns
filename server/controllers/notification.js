const Notification= require("../models/Notification");
const asyncHandler = require("express-async-handler");



// @route GET /notification/all
// @desc find all notifications
// @access Private

exports.fetchAllNotifications= asyncHandler(async (req, res, next) => {
   
  let userId=req.user.id

  let notifications=await Notification.find({ userId: userId,})
  res.status(200).json({
    success:{
     notifications:notifications
    }
  })
})

// @route GET /notification/unread
// @desc find all unread notifications
// @access Private

exports.fetchAllUnreadNotifications= asyncHandler(async (req, res, next) => {
   
  let userId=req.user.id
  
  let notifications=await Notification.find({ userId: userId,isRead:false})
  res.status(200).json({
    success:{
     notifications:notifications
    }
  })
})

// @route PUT /notification/create
// @desc create notification
// @access Private

exports.createNewNotification= asyncHandler(async (req, res, next) => {
   
   let {title,description,type,userId}=req.body

   await Notification.create({title,description,type,userId})
   
   res.status(201).json({
     success:{
      message:"Notification created!"
     }
   })
   
})


// @route GET /notification/dismiss/:id
// @desc Mark notification as read
// @access Private

exports.dismissNotification= asyncHandler(async (req, res, next) => {
   
  let id=req.params.id//notification id
  let userId=req.user.id
  await Notification.findByIdAndUpdate({_id:id},{
    $set:{
      isRead:true
    }
  })
  
  let notifications=await Notification.find({ userId: userId,isRead:false})// unread notifications
  res.status(200).json({
    success:{
     notifications:notifications
    }
  })
})


