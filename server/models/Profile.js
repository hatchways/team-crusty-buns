const mongoose = require("mongoose");

const ProfileSchema= new mongoose.Schema({
   userId:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
   firstName:String,
   lastName:String,
   description:String,
   gender:String,
   birthDate:Date,
   phoneNumber:String,
   hourlyRate:Number,
   address:{
     city:String,
     province:String
   },
   isAvailable:{type:Boolean,default:false},
   email:String,
   availability:{
    days: {
      Monday: {type:Boolean,default:true},
      Tuesday: {type:Boolean,default:true},
      Wednesday: {type:Boolean,default:true},
      Thursday: {type:Boolean,default:true},
      Friday: {type:Boolean,default:true},
      Saturday: {type:Boolean,default:false},
      Sunday: {type:Boolean,default:false},
    },
    hours: {
      end: String,
      start: String,
    },
   }

})

module.exports = User = mongoose.model("profile", ProfileSchema);