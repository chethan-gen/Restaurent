const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
          name:{
            type:String,
            required:true,
          },
          price:{
            type:Number,
            required:true,
          }
});

const ItemsSchema = mongoose.model('ItemsSchema',itemsSchema);
module.exports=ItemsSchema;