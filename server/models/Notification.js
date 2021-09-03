const mongoose = require("mongoose");

const notificationSchema= new mongoose.Schema({
   userId:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
   title:String,
   type:String,
   description:String,
   isRead:{type:Boolean,default:false},
   createdOn:{type:Date,default:Date.now()}
})

module.exports = User = mongoose.model("notification", notificationSchema);