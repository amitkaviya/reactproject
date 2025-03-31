const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
  name:String,
  qty:Number,
  price:Number,
  username:String,
  createDate:{type:Date,default: new Date()},
})



module.exports=mongoose.model('cart',cartSchema)