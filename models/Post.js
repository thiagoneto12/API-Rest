const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
     extras: {
         type: Object,
     },

     nome:{
        type: String,
        require: true
     }
     
})

module.exports = mongoose.model('Post', PostSchema);