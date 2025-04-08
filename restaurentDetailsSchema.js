const mongoose = require('mongoose');

const restaurentDetailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    itemsarr:{
        type:Array,
        required:true,
    }
});

const RestaurentDetailsSchema = mongoose.model('RestaurentDetailsSchema',restaurentDetailsSchema);
module.exports=RestaurentDetailsSchema;